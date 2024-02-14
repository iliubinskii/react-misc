import * as React from "react";
import { useRealEffect, useResource } from "../common-hooks";

/**
 * Delayed callback hook.
 *
 * @param callback - Callback.
 * @param deps - Dependencies.
 * @param timeout - Timeout.
 * @returns Delayed callback.
 */
export function useDelayedCallback(
  callback: () => void,
  deps: React.DependencyList,
  timeout: number
): Tuple {
  const callbackRef = React.useRef(callback);

  const handle = React.useRef<ReturnType<typeof setTimeout>>();

  const clearDelayedCallback = React.useCallback(() => {
    clearTimeout(handle.current);
  }, []);

  const delayedCallback = React.useCallback(() => {
    clearTimeout(handle.current);
    handle.current = setTimeout(() => {
      callbackRef.current();
    }, timeout);
  }, [timeout]);

  const immediate = React.useCallback(() => {
    callbackRef.current();
  }, []);

  // Clear timeout
  useResource(
    () => () => {
      clearTimeout(handle.current);
    },
    []
  );

  // Update callback
  useRealEffect(() => {
    callbackRef.current = callback;
  }, deps);

  return [delayedCallback, immediate, clearDelayedCallback];
}

/**
 * @internal
 */
export interface CancelDelayedCallback {
  /**
   * Cancels delayed callback.
   */
  (): void;
}

/**
 * @internal
 */
export interface DelayedCallback {
  /**
   * Executes callback with delay.
   */
  (): void;
}

/**
 * @internal
 */
export interface Immediate {
  /**
   * Executes callback immediately.
   */
  (): void;
}

/**
 * @internal
 */
// eslint-disable-next-line misc/typescript/no-multi-type-tuples -- Ok
export type Tuple = readonly [
  DelayedCallback,
  Immediate,
  CancelDelayedCallback
];
