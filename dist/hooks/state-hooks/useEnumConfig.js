"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEnumConfig = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const typescript_misc_1 = require("typescript-misc");
const common_hooks_1 = require("../common-hooks");
/**
 * Enumeration hook.
 *
 * @param configFactory - Configuration factory.
 * @param deps - Dependencies.
 * @returns Stateful enumeration value.
 */
function useEnumConfig(configFactory, deps) {
    const { enumeration, initialState, onSet = typescript_misc_1.fn.noop, resetOnInitialStateChange = false } = 
    // eslint-disable-next-line react-hooks/exhaustive-deps -- Ok
    React.useMemo(configFactory, deps);
    const ref = React.useRef(initialState);
    const [state, setState] = React.useState(initialState);
    const setEnumState = React.useMemo(() => typescript_misc_1.o.map(enumeration, nextState => () => {
        if (nextState === ref.current) {
            // Already set
        }
        else {
            ref.current = nextState;
            setState(nextState);
            onSet(nextState);
        }
    }), [enumeration, onSet]);
    const setEnumStateNoEvent = React.useMemo(() => typescript_misc_1.o.map(enumeration, nextState => () => {
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
    (0, common_hooks_1.useRealEffect)(() => {
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
exports.useEnumConfig = useEnumConfig;
//# sourceMappingURL=useEnumConfig.js.map