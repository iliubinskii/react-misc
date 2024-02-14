import * as React from "react";
/**
 * Boolean hook.
 *
 * @param configFactory - Configuration factory.
 * @param deps - Dependencies.
 * @returns Stateful boolean value.
 */
export declare function useBooleanConfig(configFactory: () => Config, deps: React.DependencyList): Tuple;
export interface Config {
    readonly initialState?: boolean;
    /**
     * Handles "OnSet" event.
     *
     * @param value - Value.
     */
    readonly onSet?: (value: boolean) => void;
    /**
     * Handles "OnSetFalse" event.
     */
    readonly onSetFalse?: () => void;
    /**
     * Handles "OnSetTrue" event.
     */
    readonly onSetTrue?: () => void;
    readonly resetOnInitialStateChange?: boolean;
}
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
export interface SetFalseNoEvent {
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
export interface SetTrueNoEvent {
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
export interface ToggleNoEvent {
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
    Readonly<React.MutableRefObject<boolean>>,
    SetTrueNoEvent,
    SetFalseNoEvent,
    ToggleNoEvent
];
//# sourceMappingURL=useBooleanConfig.d.ts.map