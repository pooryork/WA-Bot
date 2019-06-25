## synchronize-helpers

[![Build Status](https://travis-ci.org/mixmaxhq/synchronize-helpers.svg?branch=master)](https://travis-ci.org/mixmaxhq/synchronize-helpers)

This module provides helpers for wrapping `sync.defer()` for `synchronize.js`.
`wrapException` is used to ensure that we won't throw an exception in a
`sync.parallel` block which would otherwise halt processing of the block.
While `swallowException` is useful to swallow any exceptions that would
otherwise be thrown (when we'd rather handle the returned data as undefined
vs try/catch which can be useful if in a `sync.parallel` block where we
expect certain errors can occur).

## Install
```
$ npm install synchronize-helpers --save
```

## API

### wrapException(done, errArray)

A common pattern is to use a `parallel` block from `synchronize` to run code
concurrently. `wrapException` allows you to defer error handling until the end
by providing an error to hold all exceptions that occur.

```js
var sync = require('synchronize');
var wrapException = require('synchronize-helpers').wrapException;
var thrownErrors = [];

sync.parallel(function() {
  doA(wrapException(sync.defer(), thrownErrors));
  doB(wrapException(sync.defer(), thrownErrors));
  doC(wrapException(sync.defer(), thrownErrors));
});

sync.await();

console.dir(thrownErrors);
```

### swallowException(done)

There is also the situation where one might be retrieving data, and instead of
handling any errors, would rather consider the data to be undefined. A concrete
case would be retrieving instance metadata but not wanting to write conditional
code for determining whether the environment was production, staging, dev,
testing, etc. As such, we could do the following:

```js
var sync = require('synchronize');
var swallowException = require('synchronize-helpers').swallowException;

sync.parallel(function() {
  doA(swallowException(sync.defer()));
  doB(swallowException(sync.defer()));
  doC(swallowException(sync.defer()));
});

var data = sync.await();
console.dir(data);
```

## Release History
* 1.0.0 Initial release.
