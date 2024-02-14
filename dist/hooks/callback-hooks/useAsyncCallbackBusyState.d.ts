import * as React from "react";
import type { unknowns } from "typescript-misc";
/**
 * Async callback hook.
 *
 * @param async - Async callback.
 * @param deps - Dependencies.
 * @returns Sync function.
 */
export declare function useAsyncCallbackBusyState<T extends unknowns>(async: (...args: T) => Promise<void>, deps: React.DependencyList): Tuple<T>;
/**
 * @internal
 */
export interface Sync<T extends unknowns> {
    /**
     * Sync function.
     *
     * @param args - Arguments.
     */
    (...args: T): void;
}
/**
 * @internal
 */
export type Tuple<T extends unknowns> = readonly [Sync<T>, boolean];
//# sourceMappingURL=useAsyncCallbackBusyState.d.ts.map