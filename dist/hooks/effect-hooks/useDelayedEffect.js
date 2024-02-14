"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDelayedEffect = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const common_hooks_1 = require("../common-hooks");
/**
 * Delayed effect hook.
 *
 * @param effect - Imperative function.
 * @param deps - Dependencies.
 * @param timeout - Timeout.
 */
function useDelayedEffect(effect, deps, timeout) {
    const effectRef = React.useRef(effect);
    const handle = React.useRef();
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
exports.useDelayedEffect = useDelayedEffect;
//# sourceMappingURL=useDelayedEffect.js.map