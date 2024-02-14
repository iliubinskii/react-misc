import * as React from "react";
/**
 * Async callback hook.
 *
 * @param async - Async callback.
 * @param deps - Dependencies.
 * @returns Sync function.
 */
export function useAsyncCallback(async, deps) {
    // eslint-disable-next-line @typescript-eslint/no-misused-promises, react-hooks/exhaustive-deps -- Ok
    return React.useCallback(async, deps);
}
//# sourceMappingURL=useAsyncCallback.jsx.map