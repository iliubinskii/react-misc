import { dateFnsWrapper, neverDemand } from "typescript-misc";
import React from "react";
import { memo } from "../functions";
export const DatetimeProvider = memo("DatetimeProvider", ({ children, locale }) => {
    const datetime = React.useMemo(() => dateFnsWrapper({ locale }), [locale]);
    return (<DatetimeContext.Provider value={datetime}>
        {children}
      </DatetimeContext.Provider>);
});
/**
 * Consumes datetime context.
 * @returns Datetime context.
 */
export function useDatetime() {
    return React.useContext(DatetimeContext);
}
const DatetimeContext = React.createContext(neverDemand());
//# sourceMappingURL=datetime.jsx.map