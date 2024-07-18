import React from "react";
import { fn } from "typescript-misc";
import { useRealEffect } from "../common-hooks";
/**
 * Boolean hook.
 * @param configFactory - Configuration factory.
 * @param deps - Dependencies.
 * @returns Stateful boolean value.
 */
export function useBooleanConfig(configFactory, deps) {
    const { initialState = false, onSet = fn.noop, onSetFalse = fn.noop, onSetTrue = fn.noop, resetOnInitialStateChange = false } = 
    // eslint-disable-next-line react-hooks/exhaustive-deps -- Ok
    React.useMemo(configFactory, deps);
    const ref = React.useRef(initialState);
    const [state, setState] = React.useState(initialState);
    const setTrue = React.useCallback(() => {
        if (ref.current) {
            // Already true
        }
        else {
            ref.current = true;
            setState(true);
            onSet(true);
            onSetTrue();
        }
    }, [onSet, onSetTrue]);
    const setTrueNoEvent = React.useCallback(() => {
        ref.current = true;
        setState(true);
    }, []);
    const setFalse = React.useCallback(() => {
        if (ref.current) {
            ref.current = false;
            setState(false);
            onSet(false);
            onSetFalse();
        }
    }, [onSet, onSetFalse]);
    const setFalseNoEvent = React.useCallback(() => {
        ref.current = false;
        setState(false);
    }, []);
    const toggle = React.useCallback(() => {
        ref.current = !ref.current;
        setState(prevState => !prevState);
        if (ref.current) {
            onSet(true);
            onSetTrue();
        }
        else {
            onSet(false);
            onSetFalse();
        }
    }, [onSet, onSetFalse, onSetTrue]);
    const toggleNoEvent = React.useCallback(() => {
        ref.current = !ref.current;
        setState(prevState => !prevState);
    }, []);
    useRealEffect(() => {
        if (resetOnInitialStateChange)
            setState(initialState);
    }, [initialState]);
    return React.useMemo(() => [
        state,
        setTrue,
        setFalse,
        toggle,
        ref,
        setTrueNoEvent,
        setFalseNoEvent,
        toggleNoEvent
    ], [
        setFalse,
        setFalseNoEvent,
        setTrue,
        setTrueNoEvent,
        state,
        toggle,
        toggleNoEvent
    ]);
}
//# sourceMappingURL=useBooleanConfig.js.map