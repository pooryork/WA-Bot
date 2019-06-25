var expect = require('chai').expect;
var synchronizeHelpers = require('..');

var wrapException = synchronizeHelpers.wrapException,
    swallowException = synchronizeHelpers.swallowException;

describe('synchronize-helpers', () => {
  describe('wrapException', () => {
    it('should attach errors to the given error array', () => {
      var values = [],
          errors = [];
      var done = dataWrapper(values);

      returnValue(5, wrapException(done, errors));
      returnValue('foo', wrapException(done, errors));
      returnErr(wrapException(done, errors));
      returnValue('bar', wrapException(done, errors));

      expect(values).to.deep.equal([5, 'foo', undefined, 'bar']);
      expect(errors).to.deep.equal([singleErr]);
    });
  });

  describe('swallowException', () => {
    it('should swallow all exceptions', () => {
      var values = [];
      var done = dataWrapper(values);

      returnValue(5, swallowException(done));
      returnValue('foo', swallowException(done));
      returnErr(swallowException(done));
      returnValue('bar', swallowException(done));

      expect(values).to.deep.equal([5, 'foo', undefined, 'bar']);
    });
  });
});

const singleErr = new Error('this is an error');

/**
 * dataWrapper returns a callback that will attach any values to the passed
 * array, but will throw if an error is returned.
 * @param  {Array} valueRA The array to store values on.
 * @return {Function}      Node style callback.
 */
const dataWrapper = (valueRA) => {
  return (err, value) => {
    if (err) throw err;
    if (valueRA) valueRA.push(value);
  };
};

/**
 * returnErr always calls the given callback with an error.
 * @param  {Function} done Node style callback.
 */
const returnErr = (done) => {
  done(singleErr);
};

/**
 * returnValue always calls the given callback with the given value.
 * @param  {Anything}   val  Any given value.
 * @param  {Function} done Node style callback.
 */
const returnValue = (val, done) => {
  done(null, val);
};
