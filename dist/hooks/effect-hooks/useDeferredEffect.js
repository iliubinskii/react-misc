"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDeferredEffect = useDeferredEffect;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const common_hooks_1 = require("../common-hooks");
/**
 * Deferred effect hook.
 * @param effect - Imperative function.
 * @param deps - Dependencies.
 */
function useDeferredEffect(effect, deps) {
    const [counter, setCounter] = react_1.default.useState(0);
    const deferredCounter = react_1.default.useDeferredValue(counter);
    // Execute deferred effect
    (0, common_hooks_1.useRealEffect)(() => {
        if (deferredCounter)
            effect();
    }, [deferredCounter]);
    // Trigger deferred effect
    (0, common_hooks_1.useRealEffect)(() => {
        setCounter(prevCounter => prevCounter + 1);
    }, deps);
}
//# sourceMappingURL=useDeferredEffect.js.map