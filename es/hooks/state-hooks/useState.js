import React from "react";
import { is } from "typescript-misc";
/**
 * State hook.
 * @param initialState - Initial state.
 * @returns Stateful value.
 */
export function useState(initialState) {
    const ref = React.useRef(initialState);
    const [state, setState] = React.useState(initialState);
    const resetState = React.useCallback(() => {
        ref.current = initialState;
        setState(initialState);
    }, [initialState]);
    const setStateWrapper = React.useCallback(value => {
        const normalized = is.callable(value) ? value(ref.current) : value;
        ref.current = normalized;
        setState(normalized);
    }, []);
    return React.useMemo(() => [state, setStateWrapper, resetState, ref], [resetState, setStateWrapper, state]);
}
//# sourceMappingURL=useState.js.map