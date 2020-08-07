import { SafeNonNegativeInteger } from '@aristocrat/pure-utils';

export interface RandomPool {

  readonly buffer: Buffer;
  offset: SafeNonNegativeInteger;

}

export interface RandomApi {

  readonly getPool: () => RandomPool;
  readonly fillPoolIfLow: () => void;
  readonly fillPoolIfLowAsync: () => Promise<void>;
  readonly getRandomNumber: (upper: number) => number;

}
