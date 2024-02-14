import * as React from "react";
import { useRealEffect } from "../common-hooks";

/**
 * Deferred callback hook.
 *
 * @param callback - Callback.
 * @returns Deferred callback.
 */
export function useDeferredCallback(callback: () => void): DeferredCallback {
  const [counter, setCounter] = React.useState(0);

  const deferredCounter = React.useDeferredValue(counter);

  useRealEffect(() => {
    if (deferredCounter) callback();
  }, [deferredCounter]);

  return React.useCallback(() => {
    setCounter(prevCounter => prevCounter + 1);
  }, []);
}

/**
 * @internal
 */
export interface DeferredCallback {
  /**
   * Executes callback with delay.
   */
  (): void;
}
