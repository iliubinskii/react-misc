import * as React from "react";

/**
 * Effect hook.
 *
 * @param effect - Imperative function.
 * @param deps - Dependencies.
 */
export function useRealEffect<T>(
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type -- Ok
  effect: () => T extends void ? T : never,
  deps: React.DependencyList
): void {
  // eslint-disable-next-line react-hooks/exhaustive-deps -- Ok
  React.useEffect(effect, deps);
}
