import * as React from "react";
import { fn, o } from "typescript-misc";
import { useRealEffect } from "../common-hooks";
/**
 * Enumeration hook.
 *
 * @param configFactory - Configuration factory.
 * @param deps - Dependencies.
 * @returns Stateful enumeration value.
 */
export function useEnumConfig(configFactory, deps) {
    const { enumeration, initialState, onSet = fn.noop, resetOnInitialStateChange = false } = 
    // eslint-disable-next-line react-hooks/exhaustive-deps -- Ok
    React.useMemo(configFactory, deps);
    const ref = React.useRef(initialState);
    const [state, setState] = React.useState(initialState);
    const setEnumState = React.useMemo(() => o.map(enumeration, nextState => () => {
        if (nextState === ref.current) {
            // Already set
        }
        else {
            ref.current = nextState;
            setState(nextState);
            onSet(nextState);
        }
    }), [enumeration, onSet]);
    const setEnumStateNoEvent = React.useMemo(() => o.map(enumeration, nextState => () => {
        ref.current = nextState;
        setState(nextState);
    }), [enumeration]);
    const setEnumStateToValue = React.useCallback((value) => {
        ref.current = value;
        setState(value);
        onSet(value);
    }, [onSet]);
    const setEnumStateToValueNoEvent = React.useCallback((value) => {
        ref.current = value;
        setState(value);
    }, []);
    useRealEffect(() => {
        if (resetOnInitialStateChange)
            setState(initialState);
    }, [initialState]);
    return React.useMemo(() => [
        state,
        setEnumState,
        setEnumStateToValue,
        ref,
        setEnumStateNoEvent,
        setEnumStateToValueNoEvent
    ], [
        setEnumState,
        setEnumStateNoEvent,
        setEnumStateToValue,
        setEnumStateToValueNoEvent,
        state
    ]);
}
//# sourceMappingURL=useEnumConfig.js.map