"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDeferredCallback = useDeferredCallback;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const common_hooks_1 = require("../common-hooks");
/**
 * Deferred callback hook.
 * @param callback - Callback.
 * @returns Deferred callback.
 */
function useDeferredCallback(callback) {
    const [counter, setCounter] = react_1.default.useState(0);
    const deferredCounter = react_1.default.useDeferredValue(counter);
    (0, common_hooks_1.useRealEffect)(() => {
        if (deferredCounter)
            callback();
    }, [deferredCounter]);
    return react_1.default.useCallback(() => {
        setCounter(prevCounter => prevCounter + 1);
    }, []);
}
//# sourceMappingURL=useDeferredCallback.js.map