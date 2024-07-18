"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAsyncEffect = useAsyncEffect;
const common_hooks_1 = require("../common-hooks");
/**
 * Async effect hook.
 * @param effect - Imperative function.
 * @param deps - Dependencies.
 */
function useAsyncEffect(effect, deps) {
    (0, common_hooks_1.useRealEffect)(() => {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises -- Ok
        effect();
    }, deps);
}
//# sourceMappingURL=useAsyncEffect.js.map