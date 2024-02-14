"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useState = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const typescript_misc_1 = require("typescript-misc");
/**
 * State hook.
 *
 * @param initialState - Initial state.
 * @returns Stateful value.
 */
function useState(initialState) {
    const ref = React.useRef(initialState);
    const [state, setState] = React.useState(initialState);
    const resetState = React.useCallback(() => {
        ref.current = initialState;
        setState(initialState);
    }, [initialState]);
    const setStateWrapper = React.useCallback(value => {
        const normalized = typescript_misc_1.is.callable(value) ? value(ref.current) : value;
        ref.current = normalized;
        setState(normalized);
    }, []);
    return React.useMemo(() => [state, setStateWrapper, resetState, ref], [resetState, setStateWrapper, state]);
}
exports.useState = useState;
//# sourceMappingURL=useState.js.map