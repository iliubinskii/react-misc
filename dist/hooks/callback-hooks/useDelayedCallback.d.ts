import * as React from "react";
/**
 * Delayed callback hook.
 *
 * @param callback - Callback.
 * @param deps - Dependencies.
 * @param timeout - Timeout.
 * @returns Delayed callback.
 */
export declare function useDelayedCallback(callback: () => void, deps: React.DependencyList, timeout: number): Tuple;
/**
 * @internal
 */
export interface CancelDelayedCallback {
    /**
     * Cancels delayed callback.
     */
    (): void;
}
/**
 * @internal
 */
export interface DelayedCallback {
    /**
     * Executes callback with delay.
     */
    (): void;
}
/**
 * @internal
 */
export interface Immediate {
    /**
     * Executes callback immediately.
     */
    (): void;
}
/**
 * @internal
 */
export type Tuple = readonly [
    DelayedCallback,
    Immediate,
    CancelDelayedCallback
];
//# sourceMappingURL=useDelayedCallback.d.ts.map