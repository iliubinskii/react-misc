import type React from "react";
import { useRealEffect } from "../common-hooks";

/**
 * Async effect hook.
 * @param effect - Imperative function.
 * @param deps - Dependencies.
 */
export function useAsyncEffect(
  effect: () => Promise<void>,
  deps: React.DependencyList
): void {
  useRealEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises -- Ok
    effect();
  }, deps);
}
