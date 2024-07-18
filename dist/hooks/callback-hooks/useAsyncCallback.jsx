"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAsyncCallback = useAsyncCallback;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
/**
 * Async callback hook.
 * @param async - Async callback.
 * @param deps - Dependencies.
 * @returns Sync function.
 */
function useAsyncCallback(async, deps) {
    // eslint-disable-next-line @typescript-eslint/no-misused-promises, react-hooks/exhaustive-deps -- Ok
    return react_1.default.useCallback(async, deps);
}
//# sourceMappingURL=useAsyncCallback.jsx.map