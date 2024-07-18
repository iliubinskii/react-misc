import type { IndexedRecord, Rec, booleanU } from "typescript-misc";
import React from "react";
/**
 * Enumeration hook.
 * @param configFactory - Configuration factory.
 * @param deps - Dependencies.
 * @returns Stateful enumeration value.
 */
export declare function useEnumConfig<T extends string>(configFactory: () => Config<T>, deps: React.DependencyList): Tuple<T>;
export interface Config<T extends string> {
    readonly enumeration: IndexedRecord<T>;
    readonly initialState: T;
    /**
     * Handles "OnSet" event.
     * @param state - State.
     */
    readonly onSet?: ((state: T) => void) | undefined;
    readonly resetOnInitialStateChange?: booleanU;
}
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
export interface SetEnumStateNoEvent {
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
     * @param value - Value.
     */
    (value: T): void;
}
/**
 * @internal
 */
export interface SetEnumStateToValueNoEvent<T extends string> {
    /**
     * Sets state to a value.
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
    Readonly<React.MutableRefObject<T>>,
    Rec<T, SetEnumStateNoEvent>,
    SetEnumStateToValueNoEvent<T>
];
//# sourceMappingURL=useEnumConfig.d.ts.map