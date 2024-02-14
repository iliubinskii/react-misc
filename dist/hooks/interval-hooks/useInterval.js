"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInterval = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const common_hooks_1 = require("../common-hooks");
/**
 * Interval hook.
 *
 * @param callback - Callback.
 * @param deps - Dependencies.
 * @param interval - Interval.
 */
function useInterval(callback, deps, interval) {
    // eslint-disable-next-line react-hooks/exhaustive-deps -- Ok
    const memorizedCallback = React.useCallback(callback, deps);
    (0, common_hooks_1.useResource)(() => {
        const handle = setInterval(memorizedCallback, interval);
        return () => {
            clearInterval(handle);
        };
    }, [interval, memorizedCallback]);
}
exports.useInterval = useInterval;
//# sourceMappingURL=useInterval.js.map