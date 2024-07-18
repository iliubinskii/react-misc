"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAsyncInterval = useAsyncInterval;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const common_hooks_1 = require("../common-hooks");
/**
 * Async interval hook.
 * @param async - Async callback.
 * @param deps - Dependencies.
 * @param interval - Interval.
 */
function useAsyncInterval(async, deps, interval) {
    // eslint-disable-next-line react-hooks/exhaustive-deps -- Ok
    const memorizedAsync = react_1.default.useCallback(async, deps);
    (0, common_hooks_1.useResource)(() => {
        // eslint-disable-next-line @typescript-eslint/no-misused-promises -- Ok
        const handle = setInterval(memorizedAsync, interval);
        return () => {
            clearInterval(handle);
        };
    }, [interval, memorizedAsync]);
}
//# sourceMappingURL=useAsyncInterval.js.map