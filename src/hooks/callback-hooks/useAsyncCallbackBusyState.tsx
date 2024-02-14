import * as React from "react";
import type { unknowns } from "typescript-misc";

/**
 * Async callback hook.
 *
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
        // eslint-disable-next-line github/no-then, promise/prefer-await-to-then -- Ok
        .then(() => {
          setCounter(prevCounter => prevCounter - 1);
        })
        // eslint-disable-next-line github/no-then, promise/prefer-await-to-then -- Ok
        .catch((e: unknown) => {
          setCounter(prevCounter => prevCounter - 1);

          throw e;
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
   *
   * @param args - Arguments.
   */
  (...args: T): void;
}

/**
 * @internal
 */
// eslint-disable-next-line misc/typescript/no-multi-type-tuples -- Ok
export type Tuple<T extends unknowns> = readonly [Sync<T>, boolean];
