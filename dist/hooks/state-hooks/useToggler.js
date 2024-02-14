"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useToggler = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const common_hooks_1 = require("../common-hooks");
/**
 * Toggle hook.
 *
 * @param initialState - Initial state.
 * @returns Stateful boolean value.
 */
function useToggler(initialState = false) {
    const ref = React.useRef(initialState);
    const [state, setState] = React.useState(initialState);
    const toggle = React.useCallback(() => {
        setState(prevState => !prevState);
    }, []);
    (0, common_hooks_1.useRealEffect)(() => {
        ref.current = state;
    }, [state]);
    return React.useMemo(() => [state, toggle, ref], [state, toggle]);
}
exports.useToggler = useToggler;
//# sourceMappingURL=useToggler.js.map