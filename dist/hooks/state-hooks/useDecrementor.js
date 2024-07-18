"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDecrementor = useDecrementor;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const common_hooks_1 = require("../common-hooks");
/**
 * Decrementor hook.
 * @param initialState - Initial state.
 * @returns Stateful numeric value.
 */
function useDecrementor(initialState = 0) {
    const ref = react_1.default.useRef(initialState);
    const [state, setState] = react_1.default.useState(initialState);
    const decrementor = react_1.default.useCallback(() => {
        setState(prevState => prevState - 1);
    }, []);
    (0, common_hooks_1.useRealEffect)(() => {
        ref.current = state;
    }, [state]);
    return react_1.default.useMemo(() => [state, decrementor, setState, ref], [decrementor, setState, state]);
}
//# sourceMappingURL=useDecrementor.js.map