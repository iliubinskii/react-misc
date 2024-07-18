import { useRealEffect, useResource } from "../common-hooks";
import React from "react";

/**
 * Delayed effect hook.
 * @param effect - Imperative function.
 * @param deps - Dependencies.
 * @param timeout - Timeout.
 */
export function useDelayedEffect(
  effect: () => void,
  deps: React.DependencyList,
  timeout: number
): void {
  const effectRef = React.useRef(effect);

  const handle = React.useRef<ReturnType<typeof setTimeout>>();

  // Clear timeout
  useResource(
    () => () => {
      clearTimeout(handle.current);
    },
    []
  );

  // Update effect
  useRealEffect(() => {
    effectRef.current = effect;
  }, []);

  useRealEffect(() => {
    clearTimeout(handle.current);
    handle.current = setTimeout(() => {
      effectRef.current();
    }, timeout);
  }, deps);
}
