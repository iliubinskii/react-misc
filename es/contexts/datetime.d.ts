import type { CommonProps } from "../types";
import type { Locale } from "date-fns";
import type { datetime } from "typescript-misc";
export declare const DatetimeProvider: import("../types").FunctionComponent<Props>;
/**
 * Consumes datetime context.
 *
 * @returns Datetime context.
 */
export declare function useDatetime(): datetime.Facade;
/**
 * @internal
 */
export interface Props extends CommonProps.Children {
    readonly locale: Locale;
}
//# sourceMappingURL=datetime.d.ts.map