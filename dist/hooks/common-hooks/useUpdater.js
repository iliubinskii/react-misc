"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUpdater = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
/**
 * Updater hook.
 *
 * @param effect - Imperative function.
 * @param deps - Dependencies.
 */
function useUpdater(
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type -- Ok
effect, deps) {
    // eslint-disable-next-line react-hooks/exhaustive-deps -- Ok
    React.useEffect(effect, deps);
}
exports.useUpdater = useUpdater;
//# sourceMappingURL=useUpdater.js.map