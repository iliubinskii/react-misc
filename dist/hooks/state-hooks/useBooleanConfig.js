"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBooleanConfig = useBooleanConfig;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const typescript_misc_1 = require("typescript-misc");
const common_hooks_1 = require("../common-hooks");
/**
 * Boolean hook.
 * @param configFactory - Configuration factory.
 * @param deps - Dependencies.
 * @returns Stateful boolean value.
 */
function useBooleanConfig(configFactory, deps) {
    const { initialState = false, onSet = typescript_misc_1.fn.noop, onSetFalse = typescript_misc_1.fn.noop, onSetTrue = typescript_misc_1.fn.noop, resetOnInitialStateChange = false } = 
    // eslint-disable-next-line react-hooks/exhaustive-deps -- Ok
    react_1.default.useMemo(configFactory, deps);
    const ref = react_1.default.useRef(initialState);
    const [state, setState] = react_1.default.useState(initialState);
    const setTrue = react_1.default.useCallback(() => {
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
    const setTrueNoEvent = react_1.default.useCallback(() => {
        ref.current = true;
        setState(true);
    }, []);
    const setFalse = react_1.default.useCallback(() => {
        if (ref.current) {
            ref.current = false;
            setState(false);
            onSet(false);
            onSetFalse();
        }
    }, [onSet, onSetFalse]);
    const setFalseNoEvent = react_1.default.useCallback(() => {
        ref.current = false;
        setState(false);
    }, []);
    const toggle = react_1.default.useCallback(() => {
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
    const toggleNoEvent = react_1.default.useCallback(() => {
        ref.current = !ref.current;
        setState(prevState => !prevState);
    }, []);
    (0, common_hooks_1.useRealEffect)(() => {
        if (resetOnInitialStateChange)
            setState(initialState);
    }, [initialState]);
    return react_1.default.useMemo(() => [
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