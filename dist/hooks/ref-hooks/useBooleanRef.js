"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBooleanRef = useBooleanRef;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
/**
 * Boolean ref hook.
 * @param initialValue - Initial value.
 * @returns Boolean ref.
 */
function useBooleanRef(initialValue = false) {
    const value = react_1.default.useRef(initialValue);
    const setTrue = react_1.default.useCallback(() => {
        value.current = true;
    }, []);
    const setFalse = react_1.default.useCallback(() => {
        value.current = false;
    }, []);
    const toggle = react_1.default.useCallback(() => {
        value.current = !value.current;
    }, []);
    return react_1.default.useMemo(() => [value, setTrue, setFalse, toggle], [setFalse, setTrue, toggle, value]);
}
//# sourceMappingURL=useBooleanRef.js.map