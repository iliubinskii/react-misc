"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memo = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const typescript_misc_1 = require("typescript-misc");
function memo(displayName, functionComponent) {
    const named = (0, typescript_misc_1.defineFn)(functionComponent, { displayName });
    return React.memo(named);
}
exports.memo = memo;
//# sourceMappingURL=memo.js.map