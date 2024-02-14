"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useChangesLogger = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const contexts_1 = require("../contexts");
/**
 * Changes logger hook.
 *
 * @param value - Value.
 * @param message - Message.
 * @returns Value.
 */
function useChangesLogger(value, message) {
    const { log } = (0, contexts_1.useLogger)();
    const ref = React.useRef(value);
    if (value === ref.current) {
        // Did not change
    }
    else
        log(message);
    ref.current = value;
    return value;
}
exports.useChangesLogger = useChangesLogger;
//# sourceMappingURL=useChangesLogger.js.map