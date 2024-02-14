import * as React from "react";
import { TimeUnit, dateFnsWrapper, neverDemand } from "typescript-misc";
import type { CommonProps } from "../types";
import type { Locale } from "date-fns";
import { memo } from "../functions";

export const DatesProvider = memo(
  "DatesProvider",
  ({ children, locale, weekStartsOn }: Props) => {
    const datetime = React.useMemo(() => dateFnsWrapper({ locale }), [locale]);

    const context = React.useMemo((): Context => {
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

    return (
      <DatetimeContext.Provider value={context}>
        {children}
      </DatetimeContext.Provider>
    );
  }
);

/**
 * Consumes dates context.
 *
 * @returns Dates context.
 */
export function useDates(): Context {
  return React.useContext(DatetimeContext);
}

export interface Context {
  readonly dayAfterTomorrow: string;
  readonly startOfMonth: string;
  readonly startOfNextMonth: string;
  readonly startOfNextNextMonth: string;
  readonly startOfNextNextWeek: string;
  readonly startOfNextWeek: string;
  readonly startOfWeek: string;
  readonly today: string;
  readonly tomorrow: string;
  readonly year: number;
  readonly yesterday: string;
}

/**
 * @internal
 */
export interface Props extends CommonProps.Children {
  readonly locale: Locale;
  readonly weekStartsOn: 0 | 1;
}

const DatetimeContext = React.createContext(neverDemand<Context>());
