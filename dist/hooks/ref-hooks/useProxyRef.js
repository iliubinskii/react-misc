"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useProxyRef = useProxyRef;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
/**
 * Proxy ref hook.
 * @param value - Value.
 * @returns Ref.
 */
function useProxyRef(value) {
    const ref = react_1.default.useRef(value);
    ref.current = value;
    return ref;
}
//# sourceMappingURL=useProxyRef.js.map