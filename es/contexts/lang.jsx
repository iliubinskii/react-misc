import * as React from "react";
import { dictionary, neverDemand } from "typescript-misc";
import { memo } from "../functions";
export const LangProvider = memo("LangProvider", ({ children, definitions }) => {
    const context = React.useMemo(() => dictionary.Dictionary.create(definitions), [definitions]);
    return (<LangContext.Provider value={context}>{children}</LangContext.Provider>);
});
/**
 * Consumes lang context.
 *
 * @returns Lang context.
 */
export function useLang() {
    return React.useContext(LangContext);
}
const LangContext = React.createContext(neverDemand());
//# sourceMappingURL=lang.jsx.map