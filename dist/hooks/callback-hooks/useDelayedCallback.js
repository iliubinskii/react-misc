"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDelayedCallback = useDelayedCallback;
const tslib_1 = require("tslib");
const common_hooks_1 = require("../common-hooks");
const react_1 = tslib_1.__importDefault(require("react"));
/**
 * Delayed callback hook.
 * @param callback - Callback.
 * @param deps - Dependencies.
 * @param timeout - Timeout.
 * @returns Delayed callback.
 */
function useDelayedCallback(callback, deps, timeout) {
    const callbackRef = react_1.default.useRef(callback);
    const handle = react_1.default.useRef();
    const clearDelayedCallback = react_1.default.useCallback(() => {
        clearTimeout(handle.current);
    }, []);
    const delayedCallback = react_1.default.useCallback(() => {
        clearTimeout(handle.current);
        handle.current = setTimeout(() => {
            callbackRef.current();
        }, timeout);
    }, [timeout]);
    const immediate = react_1.default.useCallback(() => {
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
//# sourceMappingURL=useDelayedCallback.js.map