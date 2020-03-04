export default function keyCombListener(keys = [], timeout = Infinity, callback = () => null) {
    const len = keys.length;

    if (!keys.length) 
        return () => false;

    let status = {};
    const reset = () => {
        status = {
            idx: 0,
            startTime: null,
            stack: [],
        };
    };
    reset();

    return ({ key: pressedKey }) => {
        if (!status.startTime) {
            status.startTime = +Date.now();
        }
        
        const curTime = +Date.now();
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