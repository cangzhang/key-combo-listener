declare namespace keyCombListener {
  enum ResultProps {
    Timeout = 'timeout',
    Mismatch = 'mismatch',
    Incomplete = 'incomplete',
    Done = 'done',
  }

  interface Result {
    [ResultProps.Timeout]: boolean;
    [ResultProps.Mismatch]: boolean;
    [ResultProps.Incomplete]: boolean;
    [ResultProps.Done]: boolean;
  }

    type CallbackFunction = (result: Result) => any;
}

declare function keyCombListener(keys: string[], timeout: number, callback: keyCombListener.CallbackFunction): (ev: KeyboardEvent) => boolean;

export = keyCombListener;
