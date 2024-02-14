"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDeferredEffect = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const common_hooks_1 = require("../common-hooks");
/**
 * Deferred effect hook.
 *
 * @param effect - Imperative function.
 * @param deps - Dependencies.
 */
function useDeferredEffect(effect, deps) {
    const [counter, setCounter] = React.useState(0);
    const deferredCounter = React.useDeferredValue(counter);
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
exports.useDeferredEffect = useDeferredEffect;
//# sourceMappingURL=useDeferredEffect.js.map