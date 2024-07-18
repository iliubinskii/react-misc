"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useState = useState;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const typescript_misc_1 = require("typescript-misc");
/**
 * State hook.
 * @param initialState - Initial state.
 * @returns Stateful value.
 */
function useState(initialState) {
    const ref = react_1.default.useRef(initialState);
    const [state, setState] = react_1.default.useState(initialState);
    const resetState = react_1.default.useCallback(() => {
        ref.current = initialState;
        setState(initialState);
    }, [initialState]);
    const setStateWrapper = react_1.default.useCallback(value => {
        const normalized = typescript_misc_1.is.callable(value) ? value(ref.current) : value;
        ref.current = normalized;
        setState(normalized);
    }, []);
    return react_1.default.useMemo(() => [state, setStateWrapper, resetState, ref], [resetState, setStateWrapper, state]);
}
//# sourceMappingURL=useState.js.map