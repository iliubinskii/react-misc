"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDeferredCallback = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const common_hooks_1 = require("../common-hooks");
/**
 * Deferred callback hook.
 *
 * @param callback - Callback.
 * @returns Deferred callback.
 */
function useDeferredCallback(callback) {
    const [counter, setCounter] = React.useState(0);
    const deferredCounter = React.useDeferredValue(counter);
    (0, common_hooks_1.useRealEffect)(() => {
        if (deferredCounter)
            callback();
    }, [deferredCounter]);
    return React.useCallback(() => {
        setCounter(prevCounter => prevCounter + 1);
    }, []);
}
exports.useDeferredCallback = useDeferredCallback;
//# sourceMappingURL=useDeferredCallback.js.map