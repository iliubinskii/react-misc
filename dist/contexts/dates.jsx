"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatesProvider = void 0;
exports.useDates = useDates;
const tslib_1 = require("tslib");
const typescript_misc_1 = require("typescript-misc");
const react_1 = tslib_1.__importDefault(require("react"));
const functions_1 = require("../functions");
exports.DatesProvider = (0, functions_1.memo)("DatesProvider", ({ children, locale, weekStartsOn }) => {
    const datetime = react_1.default.useMemo(() => (0, typescript_misc_1.dateFnsWrapper)({ locale }), [locale]);
    const context = react_1.default.useMemo(() => {
        const d = datetime.create().setStartOfDay();
        return {
            dayAfterTomorrow: d.add(2, typescript_misc_1.TimeUnit.days).toString(),
            startOfMonth: d.setStartOfMonth().toString(),
            startOfNextMonth: d.setStartOfNextMonth().toString(),
            startOfNextNextMonth: d
                .setStartOfNextMonth()
                .setStartOfNextMonth()
                .toString(),
            startOfNextNextWeek: d
                .setStartOfNextWeek(weekStartsOn)
                .setStartOfNextWeek(weekStartsOn)
                .toString(),
            startOfNextWeek: d.setStartOfNextWeek(weekStartsOn).toString(),
            startOfWeek: d.setStartOfWeek(weekStartsOn).toString(),
            today: d.toString(),
            tomorrow: d.add(1, typescript_misc_1.TimeUnit.day).toString(),
            year: d.year(),
            yesterday: d.sub(1, typescript_misc_1.TimeUnit.day).toString()
        };
    }, [datetime, weekStartsOn]);
    return (<DatetimeContext.Provider value={context}>
        {children}
      </DatetimeContext.Provider>);
});
/**
 * Consumes dates context.
 * @returns Dates context.
 */
function useDates() {
    return react_1.default.useContext(DatetimeContext);
}
const DatetimeContext = react_1.default.createContext((0, typescript_misc_1.neverDemand)());
//# sourceMappingURL=dates.jsx.map