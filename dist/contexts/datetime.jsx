"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatetimeProvider = void 0;
exports.useDatetime = useDatetime;
const tslib_1 = require("tslib");
const typescript_misc_1 = require("typescript-misc");
const react_1 = tslib_1.__importDefault(require("react"));
const functions_1 = require("../functions");
exports.DatetimeProvider = (0, functions_1.memo)("DatetimeProvider", ({ children, locale }) => {
    const datetime = react_1.default.useMemo(() => (0, typescript_misc_1.dateFnsWrapper)({ locale }), [locale]);
    return (<DatetimeContext.Provider value={datetime}>
        {children}
      </DatetimeContext.Provider>);
});
/**
 * Consumes datetime context.
 * @returns Datetime context.
 */
function useDatetime() {
    return react_1.default.useContext(DatetimeContext);
}
const DatetimeContext = react_1.default.createContext((0, typescript_misc_1.neverDemand)());
//# sourceMappingURL=datetime.jsx.map