"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerProvider = void 0;
exports.useLogger = useLogger;
const tslib_1 = require("tslib");
const typescript_misc_1 = require("typescript-misc");
const react_1 = tslib_1.__importDefault(require("react"));
const core_1 = require("../core");
const functions_1 = require("../functions");
exports.LoggerProvider = (0, functions_1.memo)("LoggerProvider", ({ children, logger = typescript_misc_1.fn.noop }) => {
    const messages = react_1.default.useRef([]);
    const getMessages = react_1.default.useCallback(() => messages.current, []);
    const log = react_1.default.useCallback((...nextMessages) => {
        messages.current = [...messages.current, ...nextMessages].slice(-size);
        logger(...nextMessages);
    }, [logger]);
    const context = react_1.default.useMemo(() => {
        return { getMessages, log };
    }, [getMessages, log]);
    return (<LoggerContext.Provider value={context}>
        {children}
      </LoggerContext.Provider>);
});
/**
 * Consumes logger context.
 * @returns Logger context.
 */
function useLogger() {
    return react_1.default.useContext(LoggerContext);
}
const LoggerContext = react_1.default.createContext((0, typescript_misc_1.neverDemand)());
const { size } = core_1.consts.contexts.logger;
//# sourceMappingURL=logger.jsx.map