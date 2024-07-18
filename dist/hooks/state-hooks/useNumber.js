"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useNumber = useNumber;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const common_hooks_1 = require("../common-hooks");
/**
 * Number hook.
 * @param initialState - Initial state.
 * @returns Stateful numeric value.
 */
function useNumber(initialState = 0) {
    const ref = react_1.default.useRef(initialState);
    const [state, setState] = react_1.default.useState(initialState);
    const decrementor = react_1.default.useCallback(() => {
        setState(prevState => prevState - 1);
    }, []);
    const incrementor = react_1.default.useCallback(() => {
        setState(prevState => prevState + 1);
    }, []);
    (0, common_hooks_1.useRealEffect)(() => {
        ref.current = state;
    }, [state]);
    return react_1.default.useMemo(() => [state, setState, incrementor, decrementor, ref], [decrementor, incrementor, setState, state]);
}
//# sourceMappingURL=useNumber.js.map