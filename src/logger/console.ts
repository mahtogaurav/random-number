import { transformMessage, addLogger, LogLevel, MetaInfo } from './logger';

const logLevelFunctionMap = {
  [ LogLevel.error ]: 'error',
  [ LogLevel.warn ]: 'warn',
  [ LogLevel.info ]: 'log'
} as const;

const log = (level: LogLevel, name: string, text: string, meta?: MetaInfo,
             labels?: { [ id: string ]: string }) => {

  let metaString = '';

  if (meta) {
    try {
      metaString = JSON.stringify(meta);
    } catch (err: unknown) {
      metaString = (err as Error).toString();
    }
  }

  const targetEnvName = labels && labels.envName;

  const message = transformMessage(level, name, text, targetEnvName, metaString);

  const logger = console;
  logger[ logLevelFunctionMap[ level ] ](message);

};

addLogger({
  log
});
