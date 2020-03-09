'use strict';

var ResultType = {
  Timeout: 'timeout',
  Mismatch: 'mismatch',
  Incomplete: 'incomplete',
  Done: 'done'
};

var Result = {};
Result[ResultType.Timeout] = false;
Result[ResultType.Mismatch] = false;
Result[ResultType.Incomplete] = false;
Result[ResultType.Done] = false;

var getResult = function (prop) {
  var obj;

  return Object.assign({}, Result, ( obj = {}, obj[prop] = true, obj ));
};

function keyCombListener(keys, timeout, callback) {
  if ( keys === void 0 ) keys = [];
  if ( timeout === void 0 ) timeout = Infinity;
  if ( callback === void 0 ) callback = function () { return null; };

  var len = keys.length;

  if (keys.length === 0) {
    return function () { return false; };
  }

  var status = {};
  var reset = function () {
    status = {
      idx: 0,
      startTime: null,
      stack: []
    };
  };

  reset();

  return function (ref) {
    var pressedKey = ref.key;

    if (!status.startTime) {
      status.startTime = Number(Date.now());
    }

    var curTime = Number(Date.now());
    if (curTime - status.startTime > timeout) {
      reset();
      return callback(getResult(ResultType.Timeout));
    }

    status.stack.push(pressedKey);

    if (pressedKey !== keys[status.idx]) {
      reset();
      return callback(getResult(ResultType.Mismatch));
    }

    if (status.idx === len - 1) {
      reset();
      return callback(getResult(ResultType.Done));
    }

    status.idx++;
    return callback(getResult(ResultType.Incomplete));
  };
}

module.exports = keyCombListener;
