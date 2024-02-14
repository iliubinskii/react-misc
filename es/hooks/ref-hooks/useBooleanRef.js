import * as React from "react";
/**
 * Boolean ref hook.
 *
 * @param initialValue - Initial value.
 * @returns Boolean ref.
 */
export function useBooleanRef(initialValue = false) {
    const value = React.useRef(initialValue);
    const setTrue = React.useCallback(() => {
        value.current = true;
    }, []);
    const setFalse = React.useCallback(() => {
        value.current = false;
    }, []);
    const toggle = React.useCallback(() => {
        value.current = !value.current;
    }, []);
    return React.useMemo(() => [value, setTrue, setFalse, toggle], [setFalse, setTrue, toggle, value]);
}
//# sourceMappingURL=useBooleanRef.js.map