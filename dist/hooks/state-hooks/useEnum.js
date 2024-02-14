"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEnum = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const typescript_misc_1 = require("typescript-misc");
const common_hooks_1 = require("../common-hooks");
/**
 * Enumeration hook.
 *
 * @param initialState - Initial state.
 * @param enumeration - Enumeration.
 * @returns Stateful enumeration value.
 */
function useEnum(initialState, enumeration) {
    const ref = React.useRef(initialState);
    const [state, setState] = React.useState(initialState);
    const setEnumState = React.useMemo(() => typescript_misc_1.o.map(enumeration, nextState => () => {
        setState(nextState);
    }), [enumeration]);
    const setEnumStateToValue = React.useCallback((value) => {
        setState(value);
    }, []);
    (0, common_hooks_1.useRealEffect)(() => {
        ref.current = state;
    }, [state]);
    return React.useMemo(() => [state, setEnumState, setEnumStateToValue, ref], [setEnumState, setEnumStateToValue, state]);
}
exports.useEnum = useEnum;
//# sourceMappingURL=useEnum.js.map