import "react-native-get-random-values";
import * as React from "react";
import { memo } from "../functions";
import { neverDemand } from "typescript-misc";
export const UniqueIdProvider = memo("UniqueIdProvider", ({ children, uuid }) => (<UniqueIdContext.Provider value={uuid}>{children}</UniqueIdContext.Provider>));
/**
 * Consumes unique ID context.
 *
 * @returns Unique ID context.
 */
export function useUniqueId() {
    return React.useContext(UniqueIdContext);
}
const UniqueIdContext = React.createContext(neverDemand());
//# sourceMappingURL=unique-id.jsx.map