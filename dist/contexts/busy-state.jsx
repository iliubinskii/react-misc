"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBusyState = exports.BusyStateProvider = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const functions_1 = require("../functions");
exports.BusyStateProvider = (0, functions_1.memo)("BusyStateProvider", ({ busy, children }) => {
    const previousBusy = useBusyState();
    return (<BusyStateContext.Provider value={busy || previousBusy}>
        {children}
      </BusyStateContext.Provider>);
});
/**
 * Consumes busy state context.
 *
 * @returns Busy state.
 */
function useBusyState() {
    return React.useContext(BusyStateContext);
}
exports.useBusyState = useBusyState;
const BusyStateContext = React.createContext(false);
//# sourceMappingURL=busy-state.jsx.map