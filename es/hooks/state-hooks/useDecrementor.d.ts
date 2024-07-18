import React from "react";
/**
 * Decrementor hook.
 * @param initialState - Initial state.
 * @returns Stateful numeric value.
 */
export declare function useDecrementor(initialState?: number): Tuple;
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
export type Tuple = readonly [
    number,
    Decrementor,
    React.Dispatch<React.SetStateAction<number>>,
    Readonly<React.MutableRefObject<number>>
];
//# sourceMappingURL=useDecrementor.d.ts.map