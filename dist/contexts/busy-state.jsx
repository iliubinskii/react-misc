"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusyStateProvider = void 0;
exports.useBusyState = useBusyState;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const functions_1 = require("../functions");
exports.BusyStateProvider = (0, functions_1.memo)("BusyStateProvider", ({ busy, children }) => {
    const previousBusy = useBusyState();
    return (<BusyStateContext.Provider value={busy || previousBusy}>
        {children}
      </BusyStateContext.Provider>);
});
/**
 * Consumes busy state context.
 * @returns Busy state.
 */
function useBusyState() {
    return react_1.default.useContext(BusyStateContext);
}
const BusyStateContext = react_1.default.createContext(false);
//# sourceMappingURL=busy-state.jsx.map