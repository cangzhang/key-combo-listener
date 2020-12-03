declare namespace keyComboListener {
  enum ResultProps {
    Timeout = 'timeout',
    Mismatch = 'mismatch',
    Incomplete = 'incomplete',
    Done = 'done'
  }

  interface Result {
    [ResultProps.Timeout]: boolean;
    [ResultProps.Mismatch]: boolean;
    [ResultProps.Incomplete]: boolean;
    [ResultProps.Done]: boolean;
  }

    type CallbackFunction = (result: Result) => any;
}

declare function keyComboListener(keys: string[], timeout: number, callback: keyComboListener.CallbackFunction): (ev: KeyboardEvent) => boolean;

export = keyComboListener;
