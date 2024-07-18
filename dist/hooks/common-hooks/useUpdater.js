"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUpdater = useUpdater;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
/**
 * Updater hook.
 * @param effect - Imperative function.
 * @param deps - Dependencies.
 */
function useUpdater(effect, deps) {
    // eslint-disable-next-line react-hooks/exhaustive-deps -- Ok
    react_1.default.useEffect(effect, deps);
}
//# sourceMappingURL=useUpdater.js.map