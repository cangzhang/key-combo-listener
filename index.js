export function keyCombListener(keys = [], timeout, callback = () => null) {
    const len = keys.length;
    if (!keys.length || !timeout) return () => false;
    let that = {};
    const reset = () => {
        that = {
            idx: 0,
            startTime: null,
            stack: [],
        };
    };
    reset();
    return ({ key: pressedKey }) => {
        if (!that.startTime) {
            that.startTime = Date.now();
        }
        // too long
        const curTime = Date.now();
        if (curTime - that.startTime > timeout) {
            logger(`timeout!`, curTime - that.startTime);
            reset();
            return false;
        }
        that.stack.push(pressedKey);
        if (pressedKey !== keys[that.idx]) {
            logger(`wrong code`, that.stack);
            reset();
            return false;
        }
        if (that.idx === len - 1) {
            logger(`done!`, that.stack);
            reset();
            callback();
            return true;
        }
        that.idx++;
        logger(`current: `, that.stack);
        return false;
    };
}