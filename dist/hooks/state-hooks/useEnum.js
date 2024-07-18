"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEnum = useEnum;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const typescript_misc_1 = require("typescript-misc");
const common_hooks_1 = require("../common-hooks");
/**
 * Enumeration hook.
 * @param initialState - Initial state.
 * @param enumeration - Enumeration.
 * @returns Stateful enumeration value.
 */
function useEnum(initialState, enumeration) {
    const ref = react_1.default.useRef(initialState);
    const [state, setState] = react_1.default.useState(initialState);
    const setEnumState = react_1.default.useMemo(() => typescript_misc_1.o.map(enumeration, nextState => () => {
        setState(nextState);
    }), [enumeration]);
    const setEnumStateToValue = react_1.default.useCallback((value) => {
        setState(value);
    }, []);
    (0, common_hooks_1.useRealEffect)(() => {
        ref.current = state;
    }, [state]);
    return react_1.default.useMemo(() => [state, setEnumState, setEnumStateToValue, ref], [setEnumState, setEnumStateToValue, state]);
}
//# sourceMappingURL=useEnum.js.map