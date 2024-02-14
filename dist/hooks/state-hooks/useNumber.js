"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useNumber = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const common_hooks_1 = require("../common-hooks");
/**
 * Number hook.
 *
 * @param initialState - Initial state.
 * @returns Stateful numeric value.
 */
function useNumber(initialState = 0) {
    const ref = React.useRef(initialState);
    const [state, setState] = React.useState(initialState);
    const decrementor = React.useCallback(() => {
        setState(prevState => prevState - 1);
    }, []);
    const incrementor = React.useCallback(() => {
        setState(prevState => prevState + 1);
    }, []);
    (0, common_hooks_1.useRealEffect)(() => {
        ref.current = state;
    }, [state]);
    return React.useMemo(() => [state, setState, incrementor, decrementor, ref], [decrementor, incrementor, setState, state]);
}
exports.useNumber = useNumber;
//# sourceMappingURL=useNumber.js.map