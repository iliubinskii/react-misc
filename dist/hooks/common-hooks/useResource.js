"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useResource = useResource;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
/**
 * Effect hook.
 * @param effect - Imperative function.
 * @param deps - Dependencies.
 */
function useResource(effect, deps) {
    // eslint-disable-next-line react-hooks/exhaustive-deps -- Ok
    react_1.default.useEffect(effect, deps);
}
//# sourceMappingURL=useResource.js.map