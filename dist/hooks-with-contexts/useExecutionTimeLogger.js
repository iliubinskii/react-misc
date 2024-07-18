"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useExecutionTimeLogger = useExecutionTimeLogger;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const contexts_1 = require("../contexts");
/**
 * Execution time logger hook.
 * @returns Execution time logger.
 */
function useExecutionTimeLogger() {
    const { log } = (0, contexts_1.useLogger)();
    return react_1.default.useCallback(message => {
        let done = false;
        const t1 = Date.now();
        return () => {
            if (done) {
                // Logged once
            }
            else {
                done = true;
                const t2 = Date.now();
                const time = Math.round(t2 - t1).toLocaleString();
                log(`${message} in ${time} ms`);
            }
        };
    }, [log]);
}
//# sourceMappingURL=useExecutionTimeLogger.js.map