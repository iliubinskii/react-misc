"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDelayedEffect = useDelayedEffect;
const tslib_1 = require("tslib");
const common_hooks_1 = require("../common-hooks");
const react_1 = tslib_1.__importDefault(require("react"));
/**
 * Delayed effect hook.
 * @param effect - Imperative function.
 * @param deps - Dependencies.
 * @param timeout - Timeout.
 */
function useDelayedEffect(effect, deps, timeout) {
    const effectRef = react_1.default.useRef(effect);
    const handle = react_1.default.useRef();
    // Clear timeout
    (0, common_hooks_1.useResource)(() => () => {
        clearTimeout(handle.current);
    }, []);
    // Update effect
    (0, common_hooks_1.useRealEffect)(() => {
        effectRef.current = effect;
    }, []);
    (0, common_hooks_1.useRealEffect)(() => {
        clearTimeout(handle.current);
        handle.current = setTimeout(() => {
            effectRef.current();
        }, timeout);
    }, deps);
}
//# sourceMappingURL=useDelayedEffect.js.map