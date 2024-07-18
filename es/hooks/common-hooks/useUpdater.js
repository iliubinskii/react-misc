import React from "react";
/**
 * Updater hook.
 * @param effect - Imperative function.
 * @param deps - Dependencies.
 */
export function useUpdater(effect, deps) {
    // eslint-disable-next-line react-hooks/exhaustive-deps -- Ok
    React.useEffect(effect, deps);
}
//# sourceMappingURL=useUpdater.js.map