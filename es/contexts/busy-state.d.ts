import type { CommonProps } from "../types";
export declare const BusyStateProvider: import("../types").FunctionComponent<Props>;
/**
 * Consumes busy state context.
 *
 * @returns Busy state.
 */
export declare function useBusyState(): boolean;
/**
 * @internal
 */
export interface Props extends CommonProps.Children {
    readonly busy: boolean;
}
//# sourceMappingURL=busy-state.d.ts.map