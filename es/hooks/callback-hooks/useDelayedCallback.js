import * as React from "react";
import { useRealEffect, useResource } from "../common-hooks";
/**
 * Delayed callback hook.
 *
 * @param callback - Callback.
 * @param deps - Dependencies.
 * @param timeout - Timeout.
 * @returns Delayed callback.
 */
export function useDelayedCallback(callback, deps, timeout) {
    const callbackRef = React.useRef(callback);
    const handle = React.useRef();
    const clearDelayedCallback = React.useCallback(() => {
        clearTimeout(handle.current);
    }, []);
    const delayedCallback = React.useCallback(() => {
        clearTimeout(handle.current);
        handle.current = setTimeout(() => {
            callbackRef.current();
        }, timeout);
    }, [timeout]);
    const immediate = React.useCallback(() => {
        callbackRef.current();
    }, []);
    // Clear timeout
    useResource(() => () => {
        clearTimeout(handle.current);
    }, []);
    // Update callback
    useRealEffect(() => {
        callbackRef.current = callback;
    }, deps);
    return [delayedCallback, immediate, clearDelayedCallback];
}
//# sourceMappingURL=useDelayedCallback.js.map