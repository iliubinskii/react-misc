"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEnumConfig = useEnumConfig;
const tslib_1 = require("tslib");
const typescript_misc_1 = require("typescript-misc");
const react_1 = tslib_1.__importDefault(require("react"));
const common_hooks_1 = require("../common-hooks");
/**
 * Enumeration hook.
 * @param configFactory - Configuration factory.
 * @param deps - Dependencies.
 * @returns Stateful enumeration value.
 */
function useEnumConfig(configFactory, deps) {
    const { enumeration, initialState, onSet = typescript_misc_1.fn.noop, resetOnInitialStateChange = false } = 
    // eslint-disable-next-line react-hooks/exhaustive-deps -- Ok
    react_1.default.useMemo(configFactory, deps);
    const ref = react_1.default.useRef(initialState);
    const [state, setState] = react_1.default.useState(initialState);
    const setEnumState = react_1.default.useMemo(() => typescript_misc_1.o.map(enumeration, nextState => () => {
        if (nextState === ref.current) {
            // Already set
        }
        else {
            ref.current = nextState;
            setState(nextState);
            onSet(nextState);
        }
    }), [enumeration, onSet]);
    const setEnumStateNoEvent = react_1.default.useMemo(() => typescript_misc_1.o.map(enumeration, nextState => () => {
        ref.current = nextState;
        setState(nextState);
    }), [enumeration]);
    const setEnumStateToValue = react_1.default.useCallback((value) => {
        ref.current = value;
        setState(value);
        onSet(value);
    }, [onSet]);
    const setEnumStateToValueNoEvent = react_1.default.useCallback((value) => {
        ref.current = value;
        setState(value);
    }, []);
    (0, common_hooks_1.useRealEffect)(() => {
        if (resetOnInitialStateChange)
            setState(initialState);
    }, [initialState]);
    return react_1.default.useMemo(() => [
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