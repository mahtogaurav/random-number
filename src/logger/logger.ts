import { deepFreeze, isPlainObject, PlainObject, typeGuard } from '@aristocrat/pure-utils';

export enum LogLevel {
  info,
  warn,
  error
}

export type MetaInfo = (Error | PlainObject | (PlainObject & { err: Error }) | Record<string, unknown>);
export type LoggerFn = (text: string, meta?: Record<string, unknown>, messageLabels?: { [ key: string ]: string }) => void;

export interface Logger {
  error: LoggerFn;
  info: LoggerFn;
  warn: LoggerFn;
}

export interface LoggerApi {

  readonly log: (
    level: LogLevel,
    name: string,
    text: string,
    meta?: MetaInfo,
    labels?: { [ key: string ]: string }
  ) => void;

}

const loggers: LoggerApi[] = [];

const isError = typeGuard('isError', (x): x is Error => (
  typeof x === 'object'
  && x !== null
  && typeof (x as Error).name === 'string'
  && typeof (x as Error).message === 'string'
));

const combinedLogger = (
  level: LogLevel,
  name: string,
  text: string,
  meta?: MetaInfo,
  loggerLabels?: { [ key: string ]: string },
  messageLabels?: { [ key: string ]: string }
) => {

  const labels: { [ key: string ]: string } = {};

  if (loggerLabels) {

    Object.assign(labels, loggerLabels);

  }

  if (messageLabels) {

    Object.assign(labels, messageLabels);

  }

  // serializing Error doesn't work well, so let's transform it
  if (isError(meta)) {

    meta = {
      message: meta.message,
      name: meta.name,
      stack: meta.stack
    };

  } else if (isPlainObject(meta) && isError((meta as PlainObject).err)) {

    const err = meta.err as Error;

    (meta as PlainObject).err = {
      message: err.message,
      name: err.name,
      stack: err.stack
    };

  }

  loggers.forEach(x => x.log(level, name, text, meta, labels));

};

export const transformMessage = (logLevel: LogLevel, loggerName: string, text: string, targetEnvName?: string, metaString?: string): string => [
  LogLevel[ logLevel ],
  new Date().toISOString(),
  'random-number',
  `[${loggerName}]`,
  targetEnvName ? `[${targetEnvName}]` : undefined,
  text,
  metaString
].filter(x => !!x).join(' ');

export const logger = (name: string, loggerLabels?: { [ key: string ]: string }): Logger => deepFreeze({
  error: (text: string, meta?: Record<string, unknown>, messageLabels?: { [ key: string ]: string }): void =>
    combinedLogger(LogLevel.error, name, text, meta, loggerLabels, messageLabels),
  info: (text: string, meta?: Record<string, unknown>, messageLabels?: { [ key: string ]: string }): void =>
    combinedLogger(LogLevel.info, name, text, meta, loggerLabels, messageLabels),
  warn: (text: string, meta?: Record<string, unknown>, messageLabels?: { [ key: string ]: string }): void =>
    combinedLogger(LogLevel.warn, name, text, meta, loggerLabels, messageLabels)
});

export const addLogger = (api: LoggerApi): void => {
  loggers.push(deepFreeze(api));
};
