import type { CommonProps } from "../types";
import React from "react";
import { memo } from "../functions";

export const BusyStateProvider = memo(
  "BusyStateProvider",
  ({ busy, children }: Props) => {
    const previousBusy = useBusyState();

    return (
      <BusyStateContext.Provider value={busy || previousBusy}>
        {children}
      </BusyStateContext.Provider>
    );
  }
);

/**
 * Consumes busy state context.
 * @returns Busy state.
 */
export function useBusyState(): boolean {
  return React.useContext(BusyStateContext);
}

/**
 * @internal
 */
export interface Props extends CommonProps.Children {
  readonly busy: boolean;
}

const BusyStateContext = React.createContext(false);
