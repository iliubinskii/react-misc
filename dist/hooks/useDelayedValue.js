"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDelayedValue = useDelayedValue;
const common_hooks_1 = require("./common-hooks");
const state_hooks_1 = require("./state-hooks");
/**
 * Delayed value hook.
 * @param value - Value.
 * @param timeout - Timeout.
 * @param immediate - A list of values that should be set immediately.
 * @returns Delayed value.
 */
function useDelayedValue(value, timeout, immediate = []) {
    const [delayedValue, setDelayedValue, , delayedValueRef] = (0, state_hooks_1.useState)(value);
    (0, common_hooks_1.useResource)(() => {
        if (value === delayedValueRef.current)
            return undefined;
        if (immediate.includes(value)) {
            setDelayedValue(value);
            return undefined;
        }
        const handle = setTimeout(() => {
            setDelayedValue(value);
        }, timeout);
        return () => {
            clearTimeout(handle);
        };
    }, [delayedValueRef, immediate, setDelayedValue, timeout, value]);
    return delayedValue;
}
//# sourceMappingURL=useDelayedValue.js.map