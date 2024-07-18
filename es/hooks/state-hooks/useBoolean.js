import React from "react";
import { useRealEffect } from "../common-hooks";
/**
 * Boolean hook.
 * @param initialState - Initial state.
 * @returns Stateful boolean value.
 */
export function useBoolean(initialState = false) {
    const ref = React.useRef(initialState);
    const [state, setState] = React.useState(initialState);
    const setFalse = React.useCallback(() => {
        setState(false);
    }, []);
    const setTrue = React.useCallback(() => {
        setState(true);
    }, []);
    const toggle = React.useCallback(() => {
        setState(prevState => !prevState);
    }, []);
    useRealEffect(() => {
        ref.current = state;
    }, [state]);
    return React.useMemo(() => [state, setTrue, setFalse, toggle, ref], [setFalse, setTrue, state, toggle]);
}
//# sourceMappingURL=useBoolean.js.map