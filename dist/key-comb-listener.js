'use strict';

function keyCombListener(keys, timeout, callback) {
    if ( keys === void 0 ) keys = [];
    if ( timeout === void 0 ) timeout = Infinity;
    if ( callback === void 0 ) callback = function () { return null; };

    var len = keys.length;

    if (!keys.length) 
        { return function () { return false; }; }

    var status = {};
    var reset = function () {
        status = {
            idx: 0,
            startTime: null,
            stack: [],
        };
    };
    reset();

    return function (ref) {
        var pressedKey = ref.key;

        if (!status.startTime) {
            status.startTime = +Date.now();
        }
        
        var curTime = +Date.now();
        if (curTime - status.startTime > timeout) {
            reset();
            return false;
        }
        
        status.stack.push(pressedKey);
        
        if (pressedKey !== keys[status.idx]) {
            reset();
            return false;
        }

        if (status.idx === len - 1) {
            reset();
            callback();
            return true;
        }
        
        status.idx++;
        return false;
    };
}

module.exports = keyCombListener;
