import * as React from "react";
import type { IndexedRecord, Rec } from "typescript-misc";
/**
 * Enumeration hook.
 *
 * @param initialState - Initial state.
 * @param enumeration - Enumeration.
 * @returns Stateful enumeration value.
 */
export declare function useEnum<T extends string>(initialState: T, enumeration: IndexedRecord<T>): Tuple<T>;
/**
 * @internal
 */
export interface SetEnumState {
    /**
     * Sets state.
     */
    (): void;
}
/**
 * @internal
 */
export interface SetEnumStateToValue<T extends string> {
    /**
     * Sets state to a value.
     *
     * @param value - Value.
     */
    (value: T): void;
}
/**
 * @internal
 */
export type Tuple<T extends string> = readonly [
    T,
    Rec<T, SetEnumState>,
    SetEnumStateToValue<T>,
    Readonly<React.MutableRefObject<T>>
];
//# sourceMappingURL=useEnum.d.ts.map