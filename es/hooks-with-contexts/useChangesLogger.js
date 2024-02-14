import * as React from "react";
import { useLogger } from "../contexts";
/**
 * Changes logger hook.
 *
 * @param value - Value.
 * @param message - Message.
 * @returns Value.
 */
export function useChangesLogger(value, message) {
    const { log } = useLogger();
    const ref = React.useRef(value);
    if (value === ref.current) {
        // Did not change
    }
    else
        log(message);
    ref.current = value;
    return value;
}
//# sourceMappingURL=useChangesLogger.js.map