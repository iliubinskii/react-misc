import React from "react";
/**
 * Boolean ref hook.
 * @param initialValue - Initial value.
 * @returns Boolean ref.
 */
export declare function useBooleanRef(initialValue?: boolean): Tuple;
/**
 * @internal
 */
export interface SetFalse {
    /**
     * Sets ref to false.
     */
    (): void;
}
/**
 * @internal
 */
export interface SetTrue {
    /**
     * Sets ref to true.
     */
    (): void;
}
/**
 * @internal
 */
export interface Toggle {
    /**
     * Toggles ref.
     */
    (): void;
}
/**
 * @internal
 */
export type Tuple = readonly [
    Readonly<React.MutableRefObject<boolean>>,
    SetTrue,
    SetFalse,
    Toggle
];
//# sourceMappingURL=useBooleanRef.d.ts.map