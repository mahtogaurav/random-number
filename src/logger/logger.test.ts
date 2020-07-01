import './console';
import * as ourLogger from './logger';

describe('logger', () => {

  it('Should export the required objects', () => {

    expect(ourLogger.addLogger).toEqual(expect.any(Function));
    expect(ourLogger.logger).toEqual(expect.any(Function));
    expect(ourLogger.logger('Test')).toMatchObject({
      error: expect.any(Function) as ourLogger.LoggerFn,
      info: expect.any(Function) as ourLogger.LoggerFn,
      warn: expect.any(Function) as ourLogger.LoggerFn
    });

  });

  it('Should properly output the info logs', () => {

    let data = '';
    const test = jest.spyOn(console, 'log').mockImplementation(d => data += d);

    const log = ourLogger.logger('TestLogger', {
      envName: 'testEnv'
    });

    log.info('Info', {
      meta: 'metaTest'
    }, {
      messageMeta: 'metaMessage'
    });

    expect(test).toHaveBeenCalledWith(expect.stringMatching(/info .* random-number \[TestLogger\] \[testEnv\] Info/));

  });

  it('Should properly output the warning logs', () => {

    let data = '';
    const test = jest.spyOn(console, 'warn').mockImplementation(d => data += d);

    const log = ourLogger.logger('TestLogger', {
      envName: 'testEnv'
    });

    log.warn('Warn', {
      message: 'warning',
      name: 'warning',
      stack: 'Something'
    }, {
      messageMeta: 'metaMessage'
    });

    expect(test).toHaveBeenCalledWith(expect.stringMatching(/warn .* random-number \[TestLogger\] \[testEnv\] Warn/));

  });

  it('Should properly output the error logs', () => {

    let data = '';
    const test = jest.spyOn(console, 'error').mockImplementation(d => data += d);

    const log = ourLogger.logger('TestLogger', {
      envName: 'testEnv'
    });

    log.error('Error', {
      err: new Error('TestError')
    }, {
      messageMeta: 'metaMessage'
    });

    expect(test).toHaveBeenCalledWith(expect.stringMatching(/error .* random-number \[TestLogger\] \[testEnv\] Error/));

  });

});
