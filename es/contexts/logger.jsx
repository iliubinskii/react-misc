import * as React from "react";
import { fn, neverDemand } from "typescript-misc";
import { consts } from "../core";
import { memo } from "../functions";
export const LoggerProvider = memo("LoggerProvider", ({ children, logger = fn.noop }) => {
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
export function useLogger() {
    return React.useContext(LoggerContext);
}
const LoggerContext = React.createContext(neverDemand());
const { size } = consts.contexts.logger;
//# sourceMappingURL=logger.jsx.map