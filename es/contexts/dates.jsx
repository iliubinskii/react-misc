import * as React from "react";
import { TimeUnit, dateFnsWrapper, neverDemand } from "typescript-misc";
import { memo } from "../functions";
export const DatesProvider = memo("DatesProvider", ({ children, locale, weekStartsOn }) => {
    const datetime = React.useMemo(() => dateFnsWrapper({ locale }), [locale]);
    const context = React.useMemo(() => {
        const d = datetime.create().setStartOfDay();
        return {
            dayAfterTomorrow: d.add(2, TimeUnit.days).toString(),
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
            tomorrow: d.add(1, TimeUnit.day).toString(),
            year: d.year(),
            yesterday: d.sub(1, TimeUnit.day).toString()
        };
    }, [datetime, weekStartsOn]);
    return (<DatetimeContext.Provider value={context}>
        {children}
      </DatetimeContext.Provider>);
});
/**
 * Consumes dates context.
 *
 * @returns Dates context.
 */
export function useDates() {
    return React.useContext(DatetimeContext);
}
const DatetimeContext = React.createContext(neverDemand());
//# sourceMappingURL=dates.jsx.map