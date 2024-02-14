import * as React from "react";
/**
 * State hook.
 *
 * @param configFactory - Configuration factory.
 * @param deps - Dependencies.
 * @returns Stateful value.
 */
export declare function useStateConfig<T>(configFactory: () => Config<T>, deps: React.DependencyList): Tuple<T>;
export interface Config<T = readonly []> {
    readonly initialState: T;
    /**
     * Handles "OnSet" event.
     *
     * @param state - State.
     */
    readonly onSet?: (state: T) => void;
    readonly resetOnInitialStateChange?: boolean;
}
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
//# sourceMappingURL=useStateConfig.d.ts.map