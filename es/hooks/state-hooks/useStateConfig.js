import * as React from "react";
import { fn, is } from "typescript-misc";
import { useRealEffect } from "../common-hooks";
/**
 * State hook.
 *
 * @param configFactory - Configuration factory.
 * @param deps - Dependencies.
 * @returns Stateful value.
 */
export function useStateConfig(configFactory, deps) {
    const { initialState, onSet = fn.noop, resetOnInitialStateChange = false } = 
    // eslint-disable-next-line react-hooks/exhaustive-deps -- Ok
    React.useMemo(configFactory, deps);
    const ref = React.useRef(initialState);
    const [state, setState] = React.useState(initialState);
    const resetState = React.useCallback(() => {
        ref.current = initialState;
        setState(initialState);
        onSet(initialState);
    }, [initialState, onSet]);
    const setStateWrapper = React.useCallback(value => {
        const normalized = is.callable(value) ? value(ref.current) : value;
        if (normalized === ref.current) {
            // Already set
        }
        else {
            ref.current = normalized;
            setState(normalized);
            onSet(normalized);
        }
    }, [onSet]);
    useRealEffect(() => {
        if (resetOnInitialStateChange)
            setState(initialState);
    }, [initialState]);
    return React.useMemo(() => [state, setStateWrapper, resetState, ref], [resetState, setStateWrapper, state]);
}
//# sourceMappingURL=useStateConfig.js.map