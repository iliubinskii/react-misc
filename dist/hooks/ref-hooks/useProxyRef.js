"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useProxyRef = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
/**
 * Proxy ref hook.
 *
 * @param value - Value.
 * @returns Ref.
 */
function useProxyRef(value) {
    const ref = React.useRef(value);
    ref.current = value;
    return ref;
}
exports.useProxyRef = useProxyRef;
//# sourceMappingURL=useProxyRef.js.map