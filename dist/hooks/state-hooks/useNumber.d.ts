import React from "react";
/**
 * Number hook.
 * @param initialState - Initial state.
 * @returns Stateful numeric value.
 */
export declare function useNumber(initialState?: number): Tuple;
/**
 * @internal
 */
export interface Decrementor {
    /**
     * Decrements stateful value by one.
     */
    (): void;
}
/**
 * @internal
 */
export interface Incrementor {
    /**
     * Increments stateful value by one.
     */
    (): void;
}
/**
 * @internal
 */
export type Tuple = readonly [
    number,
    React.Dispatch<React.SetStateAction<number>>,
    Incrementor,
    Decrementor,
    Readonly<React.MutableRefObject<number>>
];
//# sourceMappingURL=useNumber.d.ts.map