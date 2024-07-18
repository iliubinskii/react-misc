"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStateConfig = useStateConfig;
const tslib_1 = require("tslib");
const typescript_misc_1 = require("typescript-misc");
const react_1 = tslib_1.__importDefault(require("react"));
const common_hooks_1 = require("../common-hooks");
/**
 * State hook.
 * @param configFactory - Configuration factory.
 * @param deps - Dependencies.
 * @returns Stateful value.
 */
function useStateConfig(configFactory, deps) {
    const { initialState, onSet = typescript_misc_1.fn.noop, resetOnInitialStateChange = false } = 
    // eslint-disable-next-line react-hooks/exhaustive-deps -- Ok
    react_1.default.useMemo(configFactory, deps);
    const ref = react_1.default.useRef(initialState);
    const [state, setState] = react_1.default.useState(initialState);
    const resetState = react_1.default.useCallback(() => {
        ref.current = initialState;
        setState(initialState);
        onSet(initialState);
    }, [initialState, onSet]);
    const setStateWrapper = react_1.default.useCallback(value => {
        const normalized = typescript_misc_1.is.callable(value) ? value(ref.current) : value;
        if (normalized === ref.current) {
            // Already set
        }
        else {
            ref.current = normalized;
            setState(normalized);
            onSet(normalized);
        }
    }, [onSet]);
    (0, common_hooks_1.useRealEffect)(() => {
        if (resetOnInitialStateChange)
            setState(initialState);
    }, [initialState]);
    return react_1.default.useMemo(() => [state, setStateWrapper, resetState, ref], [resetState, setStateWrapper, state]);
}
//# sourceMappingURL=useStateConfig.js.map