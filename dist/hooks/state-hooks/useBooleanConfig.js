"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBooleanConfig = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const typescript_misc_1 = require("typescript-misc");
const common_hooks_1 = require("../common-hooks");
/**
 * Boolean hook.
 *
 * @param configFactory - Configuration factory.
 * @param deps - Dependencies.
 * @returns Stateful boolean value.
 */
function useBooleanConfig(configFactory, deps) {
    const { initialState = false, onSet = typescript_misc_1.fn.noop, onSetFalse = typescript_misc_1.fn.noop, onSetTrue = typescript_misc_1.fn.noop, resetOnInitialStateChange = false } = 
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
    (0, common_hooks_1.useRealEffect)(() => {
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
exports.useBooleanConfig = useBooleanConfig;
//# sourceMappingURL=useBooleanConfig.js.map