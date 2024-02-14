"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useIncrementor = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const common_hooks_1 = require("../common-hooks");
/**
 * Incrementor hook.
 *
 * @param initialState - Initial state.
 * @returns Stateful numeric value.
 */
function useIncrementor(initialState = 0) {
    const ref = React.useRef(initialState);
    const [state, setState] = React.useState(initialState);
    const incrementor = React.useCallback(() => {
        setState(prevState => prevState + 1);
    }, []);
    (0, common_hooks_1.useRealEffect)(() => {
        ref.current = state;
    }, [state]);
    return React.useMemo(() => [state, incrementor, setState, ref], [incrementor, setState, state]);
}
exports.useIncrementor = useIncrementor;
//# sourceMappingURL=useIncrementor.js.map