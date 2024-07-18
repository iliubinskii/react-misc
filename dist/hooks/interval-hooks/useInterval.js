"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInterval = useInterval;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const common_hooks_1 = require("../common-hooks");
/**
 * Interval hook.
 * @param callback - Callback.
 * @param deps - Dependencies.
 * @param interval - Interval.
 */
function useInterval(callback, deps, interval) {
    // eslint-disable-next-line react-hooks/exhaustive-deps -- Ok
    const memorizedCallback = react_1.default.useCallback(callback, deps);
    (0, common_hooks_1.useResource)(() => {
        const handle = setInterval(memorizedCallback, interval);
        return () => {
            clearInterval(handle);
        };
    }, [interval, memorizedCallback]);
}
//# sourceMappingURL=useInterval.js.map