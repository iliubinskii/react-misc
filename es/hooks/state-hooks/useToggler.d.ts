import * as React from "react";
/**
 * Toggle hook.
 *
 * @param initialState - Initial state.
 * @returns Stateful boolean value.
 */
export declare function useToggler(initialState?: boolean): Tuple;
/**
 * @internal
 */
export interface Toggle {
    /**
     * Toggles stateful value.
     */
    (): void;
}
/**
 * @internal
 */
export type Tuple = readonly [
    boolean,
    Toggle,
    Readonly<React.MutableRefObject<boolean>>
];
//# sourceMappingURL=useToggler.d.ts.map