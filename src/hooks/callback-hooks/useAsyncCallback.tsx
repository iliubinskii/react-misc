import * as React from "react";
import type { unknowns } from "typescript-misc";

/**
 * Async callback hook.
 *
 * @param async - Async callback.
 * @param deps - Dependencies.
 * @returns Sync function.
 */
export function useAsyncCallback<T extends unknowns>(
  async: (...args: T) => Promise<void>,
  deps: React.DependencyList
): Sync<T> {
  // eslint-disable-next-line @typescript-eslint/no-misused-promises, react-hooks/exhaustive-deps -- Ok
  return React.useCallback(async, deps);
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
