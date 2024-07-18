"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBoolean = useBoolean;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const common_hooks_1 = require("../common-hooks");
/**
 * Boolean hook.
 * @param initialState - Initial state.
 * @returns Stateful boolean value.
 */
function useBoolean(initialState = false) {
    const ref = react_1.default.useRef(initialState);
    const [state, setState] = react_1.default.useState(initialState);
    const setFalse = react_1.default.useCallback(() => {
        setState(false);
    }, []);
    const setTrue = react_1.default.useCallback(() => {
        setState(true);
    }, []);
    const toggle = react_1.default.useCallback(() => {
        setState(prevState => !prevState);
    }, []);
    (0, common_hooks_1.useRealEffect)(() => {
        ref.current = state;
    }, [state]);
    return react_1.default.useMemo(() => [state, setTrue, setFalse, toggle, ref], [setFalse, setTrue, state, toggle]);
}
//# sourceMappingURL=useBoolean.js.map