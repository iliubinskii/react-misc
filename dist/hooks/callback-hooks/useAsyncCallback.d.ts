import React from "react";
import type { unknowns } from "typescript-misc";
/**
 * Async callback hook.
 * @param async - Async callback.
 * @param deps - Dependencies.
 * @returns Sync function.
 */
export declare function useAsyncCallback<T extends unknowns>(async: (...args: T) => Promise<void>, deps: React.DependencyList): Sync<T>;
/**
 * @internal
 */
export interface Sync<T extends unknowns> {
    /**
     * Sync function.
     * @param args - Arguments.
     */
    (...args: T): void;
}
//# sourceMappingURL=useAsyncCallback.d.ts.map