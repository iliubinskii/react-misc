"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStateConfig = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const typescript_misc_1 = require("typescript-misc");
const common_hooks_1 = require("../common-hooks");
/**
 * State hook.
 *
 * @param configFactory - Configuration factory.
 * @param deps - Dependencies.
 * @returns Stateful value.
 */
function useStateConfig(configFactory, deps) {
    const { initialState, onSet = typescript_misc_1.fn.noop, resetOnInitialStateChange = false } = 
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
    return React.useMemo(() => [state, setStateWrapper, resetState, ref], [resetState, setStateWrapper, state]);
}
exports.useStateConfig = useStateConfig;
//# sourceMappingURL=useStateConfig.js.map