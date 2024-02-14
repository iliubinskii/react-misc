"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBooleanRef = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
/**
 * Boolean ref hook.
 *
 * @param initialValue - Initial value.
 * @returns Boolean ref.
 */
function useBooleanRef(initialValue = false) {
    const value = React.useRef(initialValue);
    const setTrue = React.useCallback(() => {
        value.current = true;
    }, []);
    const setFalse = React.useCallback(() => {
        value.current = false;
    }, []);
    const toggle = React.useCallback(() => {
        value.current = !value.current;
    }, []);
    return React.useMemo(() => [value, setTrue, setFalse, toggle], [setFalse, setTrue, toggle, value]);
}
exports.useBooleanRef = useBooleanRef;
//# sourceMappingURL=useBooleanRef.js.map