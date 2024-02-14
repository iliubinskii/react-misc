"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAsyncInterval = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const common_hooks_1 = require("../common-hooks");
/**
 * Async interval hook.
 *
 * @param async - Async callback.
 * @param deps - Dependencies.
 * @param interval - Interval.
 */
function useAsyncInterval(async, deps, interval) {
    // eslint-disable-next-line react-hooks/exhaustive-deps -- Ok
    const memorizedAsync = React.useCallback(async, deps);
    (0, common_hooks_1.useResource)(() => {
        const handle = setInterval(memorizedAsync, interval);
        return () => {
            clearInterval(handle);
        };
    }, [interval, memorizedAsync]);
}
exports.useAsyncInterval = useAsyncInterval;
//# sourceMappingURL=useAsyncInterval.js.map