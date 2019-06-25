/**
 * This module provides helpers for wrapping `sync.defer()` for `synchronize.js`.
 * `wrapException` is used to ensure that we won't throw an exception in a
 * `sync.parallel` block which would otherwise halt processing of the block.
 * While `swallowException` is useful to swallow any exceptions that would
 * otherwise be thrown (when we'd rather handle the returned data as undefined
 * vs try/catch which can be useful if in a `sync.parallel` block where we
 * expect certain errors can occur).
 */

/**
 * Thrown exceptions inside of parallel blocks will halt processing immediately. Use this wrapper
 * function so that all lines inside a parallel block process.
 *
 * e.g.
 *
 * ```
 * var thrownErrors = [];
 * sync.parallel(function() {
 *   doA(wrapException(sync.defer(), thrownErrors));
 *   doB(wrapException(sync.defer(), thrownErrors));
 *   doC(wrapException(sync.defer(), thrownErrors));
 * });
 *
 * sync.await();
 *
 * console.dir(thrownErrors);
 * ```
 *
 * @param  {Function} done    Node style callback
 * @param  {Array} errorArray An array to save thrown exceptions in.
 * @return {Function}         Node style callback which will add all errors to
 *    the given array instead of letting synchronize.js throw them.
 */
var wrapException = function (done, errorArray) {
  return (err, resp) => {
    if (err) {
      // Only save the error if errorArray is given.
      if (errorArray) errorArray.push(err);
      return done();
    } else {
      return done(null, resp);
    }
  };
};

/**
 * swallowException ignores any returned errors - this should only be used in
 * cases where we know we don't care to handle an error.
 * @param  {Function} done Node style callback.
 * @return {Function}      Node style callback which will swallow all errors.
 */
function swallowException(done) {
  return (err, resp) => {
    if (err) done();
    else done(null, resp);
  };
}

module.exports = {
  wrapException,
  swallowException
};
