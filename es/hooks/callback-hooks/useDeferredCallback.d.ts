/**
 * Deferred callback hook.
 * @param callback - Callback.
 * @returns Deferred callback.
 */
export declare function useDeferredCallback(callback: () => void): DeferredCallback;
/**
 * @internal
 */
export interface DeferredCallback {
    /**
     * Executes callback with delay.
     */
    (): void;
}
//# sourceMappingURL=useDeferredCallback.d.ts.map