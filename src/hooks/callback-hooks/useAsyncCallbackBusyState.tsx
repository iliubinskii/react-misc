import React from "react";
import type { unknowns } from "typescript-misc";

/**
 * Async callback hook.
 * @param async - Async callback.
 * @param deps - Dependencies.
 * @returns Sync function.
 */
export function useAsyncCallbackBusyState<T extends unknowns>(
  async: (...args: T) => Promise<void>,
  deps: React.DependencyList
): Tuple<T> {
  const [counter, setCounter] = React.useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps -- Ok
  const memorizedAsync = React.useCallback(async, deps);

  const sync = React.useCallback(
    (...args: T) => {
      const promise = memorizedAsync(...args);

      setCounter(prevCounter => prevCounter + 1);
      promise
        // eslint-disable-next-line github/no-then -- Ok
        .then(() => {
          setCounter(prevCounter => prevCounter - 1);
        })
        // eslint-disable-next-line github/no-then -- Ok
        .catch((err: unknown) => {
          setCounter(prevCounter => prevCounter - 1);

          throw err;
        });
    },
    [memorizedAsync]
  );

  return [sync, counter > 0];
}

/**
 * @internal
 */
export interface Sync<T extends unknowns> {
  /**
   * Sync function.
   * @param args - Arguments.
   */
  (...args: T): void;
}

/**
 * @internal
 */
export type Tuple<T extends unknowns> = readonly [Sync<T>, boolean];
