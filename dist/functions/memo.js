"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memo = memo;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const typescript_misc_1 = require("typescript-misc");
/**
 * Creates memorized component.
 * @param displayName - Display name.
 * @param functionComponent - Functional component.
 * @returns Memorized component.
 */
function memo(displayName, functionComponent) {
    const named = (0, typescript_misc_1.defineFn)(functionComponent, { displayName });
    // eslint-disable-next-line no-type-assertion/no-type-assertion -- Ok
    return react_1.default.memo(named);
}
//# sourceMappingURL=memo.js.map