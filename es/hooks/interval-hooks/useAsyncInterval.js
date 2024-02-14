import * as React from "react";
import { useResource } from "../common-hooks";
/**
 * Async interval hook.
 *
 * @param async - Async callback.
 * @param deps - Dependencies.
 * @param interval - Interval.
 */
export function useAsyncInterval(async, deps, interval) {
    // eslint-disable-next-line react-hooks/exhaustive-deps -- Ok
    const memorizedAsync = React.useCallback(async, deps);
    useResource(() => {
        const handle = setInterval(memorizedAsync, interval);
        return () => {
            clearInterval(handle);
        };
    }, [interval, memorizedAsync]);
}
//# sourceMappingURL=useAsyncInterval.js.map