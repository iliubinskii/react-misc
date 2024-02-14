"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBoolean = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const common_hooks_1 = require("../common-hooks");
/**
 * Boolean hook.
 *
 * @param initialState - Initial state.
 * @returns Stateful boolean value.
 */
function useBoolean(initialState = false) {
    const ref = React.useRef(initialState);
    const [state, setState] = React.useState(initialState);
    const setFalse = React.useCallback(() => {
        setState(false);
    }, []);
    const setTrue = React.useCallback(() => {
        setState(true);
    }, []);
    const toggle = React.useCallback(() => {
        setState(prevState => !prevState);
    }, []);
    (0, common_hooks_1.useRealEffect)(() => {
        ref.current = state;
    }, [state]);
    return React.useMemo(() => [state, setTrue, setFalse, toggle, ref], [setFalse, setTrue, state, toggle]);
}
exports.useBoolean = useBoolean;
//# sourceMappingURL=useBoolean.js.map