import React from "react";

/**
 * Updater hook.
 * @param effect - Imperative function.
 * @param deps - Dependencies.
 */
export function useUpdater<T>(
  effect: () => T extends void ? T : never,
  deps: React.DependencyList
): void {
  // eslint-disable-next-line react-hooks/exhaustive-deps -- Ok
  React.useEffect(effect, deps);
}
