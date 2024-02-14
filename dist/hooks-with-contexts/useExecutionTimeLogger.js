"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useExecutionTimeLogger = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const contexts_1 = require("../contexts");
/**
 * Execution time logger hook.
 *
 * @returns Execution time logger.
 */
function useExecutionTimeLogger() {
    const { log } = (0, contexts_1.useLogger)();
    return React.useCallback(message => {
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
exports.useExecutionTimeLogger = useExecutionTimeLogger;
//# sourceMappingURL=useExecutionTimeLogger.js.map