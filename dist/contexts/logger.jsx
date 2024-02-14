"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLogger = exports.LoggerProvider = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const typescript_misc_1 = require("typescript-misc");
const core_1 = require("../core");
const functions_1 = require("../functions");
exports.LoggerProvider = (0, functions_1.memo)("LoggerProvider", ({ children, logger = typescript_misc_1.fn.noop }) => {
    const messages = React.useRef([]);
    const getMessages = React.useCallback(() => messages.current, []);
    const log = React.useCallback((...nextMessages) => {
        messages.current = [...messages.current, ...nextMessages].slice(-size);
        logger(...nextMessages);
    }, [logger]);
    const context = React.useMemo(() => ({ getMessages, log }), [getMessages, log]);
    return (<LoggerContext.Provider value={context}>
        {children}
      </LoggerContext.Provider>);
});
/**
 * Consumes logger context.
 *
 * @returns Logger context.
 */
function useLogger() {
    return React.useContext(LoggerContext);
}
exports.useLogger = useLogger;
const LoggerContext = React.createContext((0, typescript_misc_1.neverDemand)());
const { size } = core_1.consts.contexts.logger;
//# sourceMappingURL=logger.jsx.map