import * as React from "react";
/**
 * Incrementor hook.
 *
 * @param initialState - Initial state.
 * @returns Stateful numeric value.
 */
export declare function useIncrementor(initialState?: number): Tuple;
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
    Incrementor,
    React.Dispatch<React.SetStateAction<number>>,
    Readonly<React.MutableRefObject<number>>
];
//# sourceMappingURL=useIncrementor.d.ts.map