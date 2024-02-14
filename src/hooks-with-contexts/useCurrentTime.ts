import * as React from "react";
import { consts } from "../core";
import { useDatetime } from "../contexts";
import { useInterval } from "../hooks";

/**
 * Current time hook.
 *
 * @returns Current time.
 */
export function useCurrentTime(): string {
  const datetime = useDatetime();

  const [currentTime, setCurrentTime] = React.useState(
    datetime.create().setStartOfMinute().toString()
  );

  useInterval(
    () => {
      setCurrentTime(datetime.create().setStartOfMinute().toString());
    },
    [datetime],
    interval
  );

  return currentTime;
}

const { interval } = consts.hooks.useCurrentTime;
