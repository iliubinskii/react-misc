"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDecrementor = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const common_hooks_1 = require("../common-hooks");
/**
 * Decrementor hook.
 *
 * @param initialState - Initial state.
 * @returns Stateful numeric value.
 */
function useDecrementor(initialState = 0) {
    const ref = React.useRef(initialState);
    const [state, setState] = React.useState(initialState);
    const decrementor = React.useCallback(() => {
        setState(prevState => prevState - 1);
    }, []);
    (0, common_hooks_1.useRealEffect)(() => {
        ref.current = state;
    }, [state]);
    return React.useMemo(() => [state, decrementor, setState, ref], [decrementor, setState, state]);
}
exports.useDecrementor = useDecrementor;
//# sourceMappingURL=useDecrementor.js.map