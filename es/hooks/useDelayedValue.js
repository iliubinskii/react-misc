import { useResource } from "./common-hooks";
import { useState } from "./state-hooks";
/**
 * Delayed value hook.
 * @param value - Value.
 * @param timeout - Timeout.
 * @param immediate - A list of values that should be set immediately.
 * @returns Delayed value.
 */
export function useDelayedValue(value, timeout, immediate = []) {
    const [delayedValue, setDelayedValue, , delayedValueRef] = useState(value);
    useResource(() => {
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