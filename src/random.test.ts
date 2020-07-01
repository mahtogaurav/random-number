import { random } from './random';

describe('random', () => {

  it('Should export random object', () => {

    expect(random.fillPoolIfLow).toEqual(expect.any(Function));
    expect(random.fillPoolIfLowAsync).toEqual(expect.any(Function));
    expect(random.getPool).toEqual(expect.any(Function));
    expect(random.getRandomNumber).toEqual(expect.any(Function));

  });

  it('Should not throw - fillPoolIfLow()', () => {

    expect(random.fillPoolIfLow).not.toThrow();

  });

  it('Should fill the pool - fillPoolIfLow()', () => {

    const randomNumbers = [];

    for (let iteration = 0; iteration <= (32768 / 2); iteration++) {

      randomNumbers.push(random.getRandomNumber(random.getRandomNumber(32768)));

    }

    const pool = random.getPool();

    expect(pool.offset).toBeGreaterThan(32768);

    // Fill the buffer.
    random.fillPoolIfLow();

    expect(pool.offset).toEqual(0);

  });

  it('Should not throw - fillPoolIfLowAsync()', () => expect(random.fillPoolIfLowAsync()).resolves.toBeUndefined());

  it('Should fill the pool - fillPoolIfLowAsync()', async () => {

    const randomNumbers = [];

    for (let iteration = 0; iteration <= (32768 / 2); iteration++) {

      randomNumbers.push(random.getRandomNumber(random.getRandomNumber(32768)));

    }

    const pool = random.getPool();

    expect(pool.offset).toBeGreaterThan(32768);

    // Fill the buffer.
    await random.fillPoolIfLowAsync();

    expect(pool.offset).toEqual(0);

  });

  it('Should return buffer with offset - getPool()', () => {

    const pool = random.getPool();

    expect(pool).toMatchObject({
      buffer: expect.any(Buffer) as Buffer,
      offset: expect.any(Number) as number
    });

  });

  it('Should return a valid random number - getRandomNumber()', () => {

    const maxRange = 101;

    const randomNumber = random.getRandomNumber(maxRange);

    expect(randomNumber).toBeGreaterThanOrEqual(0);
    expect(randomNumber).toBeLessThan(maxRange);

  });

  it('Should throw error in case of range crosses the upper bound - getRandomNumber()', () => {

    expect(() => random.getRandomNumber((2 ** 32) + 1)).toThrowError('Cannot generate random numbers greater than 2^32.');

  });

});
