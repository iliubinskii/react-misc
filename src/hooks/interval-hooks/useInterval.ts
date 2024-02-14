import * as React from "react";
import { useResource } from "../common-hooks";

/**
 * Interval hook.
 *
 * @param callback - Callback.
 * @param deps - Dependencies.
 * @param interval - Interval.
 */
export function useInterval(
  callback: React.EffectCallback,
  deps: React.DependencyList,
  interval: number
): void {
  // eslint-disable-next-line react-hooks/exhaustive-deps -- Ok
  const memorizedCallback = React.useCallback(callback, deps);

  useResource(() => {
    const handle = setInterval(memorizedCallback, interval);

    return () => {
      clearInterval(handle);
    };
  }, [interval, memorizedCallback]);
}
