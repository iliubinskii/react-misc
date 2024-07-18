"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useChangesLogger = useChangesLogger;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const contexts_1 = require("../contexts");
/**
 * Changes logger hook.
 * @param value - Value.
 * @param message - Message.
 * @returns Value.
 */
function useChangesLogger(value, message) {
    const { log } = (0, contexts_1.useLogger)();
    const ref = react_1.default.useRef(value);
    if (value === ref.current) {
        // Did not change
    }
    else
        log(message);
    ref.current = value;
    return value;
}
//# sourceMappingURL=useChangesLogger.js.map