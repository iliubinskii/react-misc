"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDatetime = exports.DatetimeProvider = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const typescript_misc_1 = require("typescript-misc");
const functions_1 = require("../functions");
exports.DatetimeProvider = (0, functions_1.memo)("DatetimeProvider", ({ children, locale }) => {
    const datetime = React.useMemo(() => (0, typescript_misc_1.dateFnsWrapper)({ locale }), [locale]);
    return (<DatetimeContext.Provider value={datetime}>
        {children}
      </DatetimeContext.Provider>);
});
/**
 * Consumes datetime context.
 *
 * @returns Datetime context.
 */
function useDatetime() {
    return React.useContext(DatetimeContext);
}
exports.useDatetime = useDatetime;
const DatetimeContext = React.createContext((0, typescript_misc_1.neverDemand)());
//# sourceMappingURL=datetime.jsx.map