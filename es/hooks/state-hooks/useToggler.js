import React from "react";
import { useRealEffect } from "../common-hooks";
/**
 * Toggle hook.
 * @param initialState - Initial state.
 * @returns Stateful boolean value.
 */
export function useToggler(initialState = false) {
    const ref = React.useRef(initialState);
    const [state, setState] = React.useState(initialState);
    const toggle = React.useCallback(() => {
        setState(prevState => !prevState);
    }, []);
    useRealEffect(() => {
        ref.current = state;
    }, [state]);
    return React.useMemo(() => [state, toggle, ref], [state, toggle]);
}
//# sourceMappingURL=useToggler.js.map