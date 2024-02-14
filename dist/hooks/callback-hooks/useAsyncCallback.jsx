"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAsyncCallback = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
/**
 * Async callback hook.
 *
 * @param async - Async callback.
 * @param deps - Dependencies.
 * @returns Sync function.
 */
function useAsyncCallback(async, deps) {
    // eslint-disable-next-line @typescript-eslint/no-misused-promises, react-hooks/exhaustive-deps -- Ok
    return React.useCallback(async, deps);
}
exports.useAsyncCallback = useAsyncCallback;
//# sourceMappingURL=useAsyncCallback.jsx.map