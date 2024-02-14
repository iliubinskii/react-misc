"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDelayedCallback = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const common_hooks_1 = require("../common-hooks");
/**
 * Delayed callback hook.
 *
 * @param callback - Callback.
 * @param deps - Dependencies.
 * @param timeout - Timeout.
 * @returns Delayed callback.
 */
function useDelayedCallback(callback, deps, timeout) {
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
    (0, common_hooks_1.useResource)(() => () => {
        clearTimeout(handle.current);
    }, []);
    // Update callback
    (0, common_hooks_1.useRealEffect)(() => {
        callbackRef.current = callback;
    }, deps);
    return [delayedCallback, immediate, clearDelayedCallback];
}
exports.useDelayedCallback = useDelayedCallback;
//# sourceMappingURL=useDelayedCallback.js.map