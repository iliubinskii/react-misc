import React from "react";
import { memo } from "../functions";
export const BusyStateProvider = memo("BusyStateProvider", ({ busy, children }) => {
    const previousBusy = useBusyState();
    return (<BusyStateContext.Provider value={busy || previousBusy}>
        {children}
      </BusyStateContext.Provider>);
});
/**
 * Consumes busy state context.
 * @returns Busy state.
 */
export function useBusyState() {
    return React.useContext(BusyStateContext);
}
const BusyStateContext = React.createContext(false);
//# sourceMappingURL=busy-state.jsx.map