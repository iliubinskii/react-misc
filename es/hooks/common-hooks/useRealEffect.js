import * as React from "react";
/**
 * Effect hook.
 *
 * @param effect - Imperative function.
 * @param deps - Dependencies.
 */
export function useRealEffect(
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type -- Ok
effect, deps) {
    // eslint-disable-next-line react-hooks/exhaustive-deps -- Ok
    React.useEffect(effect, deps);
}
//# sourceMappingURL=useRealEffect.js.map