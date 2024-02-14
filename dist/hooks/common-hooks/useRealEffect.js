"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRealEffect = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
/**
 * Effect hook.
 *
 * @param effect - Imperative function.
 * @param deps - Dependencies.
 */
function useRealEffect(
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type -- Ok
effect, deps) {
    // eslint-disable-next-line react-hooks/exhaustive-deps -- Ok
    React.useEffect(effect, deps);
}
exports.useRealEffect = useRealEffect;
//# sourceMappingURL=useRealEffect.js.map