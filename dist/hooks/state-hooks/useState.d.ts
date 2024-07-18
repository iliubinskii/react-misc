import React from "react";
/**
 * State hook.
 * @param initialState - Initial state.
 * @returns Stateful value.
 */
export declare function useState<T>(initialState: T): Tuple<T>;
/**
 * @internal
 */
export interface ResetState {
    /**
     * Resets state.
     */
    (): void;
}
/**
 * @internal
 */
export type Tuple<T> = readonly [
    T,
    React.Dispatch<React.SetStateAction<T>>,
    ResetState,
    Readonly<React.MutableRefObject<T>>
];
//# sourceMappingURL=useState.d.ts.map