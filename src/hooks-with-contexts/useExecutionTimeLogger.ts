import * as React from "react";
import { useLogger } from "../contexts";

/**
 * Execution time logger hook.
 *
 * @returns Execution time logger.
 */
export function useExecutionTimeLogger(): (message: string) => () => void {
  const { log } = useLogger();

  return React.useCallback(
    message => {
      let done = false;

      const t1 = Date.now();

      return () => {
        if (done) {
          // Logged once
        } else {
          done = true;

          const t2 = Date.now();

          const time = Math.round(t2 - t1).toLocaleString();

          log(`${message} in ${time} ms`);
        }
      };
    },
    [log]
  );
}
