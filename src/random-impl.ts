import { readFileSync } from 'fs';
import { randomFill, randomFillSync } from 'crypto';
import { promisify } from 'util';
import { join } from 'path';

import { deepFreeze, isSafeNonNegativeInteger, SAFE_ZERO, safeAdd } from '@aristocrat/pure-utils';

import { RandomApi } from './random';
import { logger } from './logger';

const log = logger('random');

try {

  log.info('random-number commit ' + readFileSync(join(__dirname, 'COMMIT')).toString('utf8'));

} catch {

  log.info('random-number commit EMPTY');

}

const randomFillAsync = promisify(randomFill as (buffer: Buffer, offset: number, size: number, cb: () => void) => void);

const BUFFER_SIZE = 1024 * 256;
const MIN_POOL_SIZE = 1024 * 128;
const pool = {
  buffer: Buffer.alloc(BUFFER_SIZE),
  offset: SAFE_ZERO
};
randomFillSync(pool.buffer);

const random: RandomApi = deepFreeze({

  fillPoolIfLow: () => {

    if (pool.offset > (pool.buffer.length - MIN_POOL_SIZE)) {

      randomFillSync(pool.buffer, 0, pool.offset);
      pool.offset = SAFE_ZERO;

    }

  },

  fillPoolIfLowAsync: async () => {

    if (pool.offset > (pool.buffer.length - MIN_POOL_SIZE)) {

      await randomFillAsync(pool.buffer, 0, pool.offset);
      pool.offset = SAFE_ZERO;

    }

  },

  getPool: () => pool,

  /**
   * Get a random number in [0, upper].
   *
   * @param upper The non-inclusive upper bound of the range. Cannot be greater than 2^32.
   *
   * @returns A random number within the specified range.
   */
  getRandomNumber: (upper: number): number => {

    const MAX_RANGE = 4294967296; // 2^32
    // The simplest way to get a perfect distribution is to reject samples that are not in the range. This method
    // requires complicated bit manipulation to avoid getting mostly rejections for certain ranges and results in
    // more sampling than necessary even after using the least required bits. Instead, we reject samples greater
    // than or equal to the largest multiple of upper within the maximum range. Because it is an exact multiple,
    // we can modulo upper to get a number in the desired range without biasing the distribution.
    const largestMultipleOfUpper = Math.floor(MAX_RANGE / upper) * upper;
    const MAX_ITERATIONS = 100;

    let sample;
    let i = 0;

    if (upper > MAX_RANGE) {
      throw new Error('Cannot generate random numbers greater than 2^32.');
    }

    do {

      if (i++ >= MAX_ITERATIONS) {

        // Incredibly unlikely that it would take this many iterations to receive
        // a sample that is in range. More likely to be a problem with random source.
        throw new Error('Too many iterations. Check your source of randomness.');

      }

      sample = random.getPool().buffer.readUInt32LE(random.getPool().offset);
      random.getPool().offset = safeAdd(isSafeNonNegativeInteger, random.getPool().offset, 4);

    } while (sample >= largestMultipleOfUpper);

    return (sample % upper);

  }

});

export {
  random
};
