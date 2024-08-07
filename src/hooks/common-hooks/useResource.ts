import React from "react";

/**
 * Effect hook.
 * @param effect - Imperative function.
 * @param deps - Dependencies.
 */
export function useResource(
  effect: () => (() => void) | undefined,
  deps: React.DependencyList
): void {
  // eslint-disable-next-line react-hooks/exhaustive-deps -- Ok
  React.useEffect(effect, deps);
}
