import React from "react";
/**
 * Boolean hook.
 * @param initialState - Initial state.
 * @returns Stateful boolean value.
 */
export declare function useBoolean(initialState?: boolean): Tuple;
/**
 * @internal
 */
export interface SetFalse {
    /**
     * Sets stateful value to false.
     */
    (): void;
}
/**
 * @internal
 */
export interface SetTrue {
    /**
     * Sets stateful value to true.
     */
    (): void;
}
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
    SetTrue,
    SetFalse,
    Toggle,
    Readonly<React.MutableRefObject<boolean>>
];
//# sourceMappingURL=useBoolean.d.ts.map