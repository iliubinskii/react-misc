import type { CommonProps } from "../types";
import type { Locale } from "date-fns";
export declare const DatesProvider: import("../types").FunctionComponent<Props>;
/**
 * Consumes dates context.
 *
 * @returns Dates context.
 */
export declare function useDates(): Context;
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
//# sourceMappingURL=dates.d.ts.map