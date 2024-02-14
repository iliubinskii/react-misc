import * as React from "react";
/**
 * Updater hook.
 *
 * @param effect - Imperative function.
 * @param deps - Dependencies.
 */
export function useUpdater(
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type -- Ok
effect, deps) {
    // eslint-disable-next-line react-hooks/exhaustive-deps -- Ok
    React.useEffect(effect, deps);
}
//# sourceMappingURL=useUpdater.js.map