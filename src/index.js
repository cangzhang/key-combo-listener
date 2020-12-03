const ResultType = {
  Timeout: 'timeout',
  Mismatch: 'mismatch',
  Incomplete: 'incomplete',
  Done: 'done'
};

const Result = {
  [ResultType.Timeout]: false,
  [ResultType.Mismatch]: false,
  [ResultType.Incomplete]: false,
  [ResultType.Done]: false
};

const getResult = prop => Object.assign({}, Result, {[prop]: true});

export default function keyComboListener(keys = [], timeout = Infinity, callback = () => null) {
  const length = keys.length;

  if (keys.length === 0) {
    return () => false;
  }

  let status = {};
  const reset = () => {
    status = {
      idx: 0,
      startTime: null,
      stack: []
    };
  };

  reset();

  return ({key: pressedKey}) => {
    if (!status.startTime) {
      status.startTime = Number(Date.now());
    }

    const curTime = Number(Date.now());
    if (curTime - status.startTime > timeout) {
      reset();
      return callback(getResult(ResultType.Timeout));
    }

    status.stack.push(pressedKey);

    if (pressedKey !== keys[status.idx]) {
      reset();
      return callback(getResult(ResultType.Mismatch));
    }

    if (status.idx === length - 1) {
      reset();
      return callback(getResult(ResultType.Done));
    }

    status.idx++;
    return callback(getResult(ResultType.Incomplete));
  };
}
