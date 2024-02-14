import * as React from "react";
/**
 * Async callback hook.
 *
 * @param async - Async callback.
 * @param deps - Dependencies.
 * @returns Sync function.
 */
export function useAsyncCallbackBusyState(async, deps) {
    const [counter, setCounter] = React.useState(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- Ok
    const memorizedAsync = React.useCallback(async, deps);
    const sync = React.useCallback((...args) => {
        const promise = memorizedAsync(...args);
        setCounter(prevCounter => prevCounter + 1);
        promise
            // eslint-disable-next-line github/no-then, promise/prefer-await-to-then -- Ok
            .then(() => {
            setCounter(prevCounter => prevCounter - 1);
        })
            // eslint-disable-next-line github/no-then, promise/prefer-await-to-then -- Ok
            .catch((e) => {
            setCounter(prevCounter => prevCounter - 1);
            throw e;
        });
    }, [memorizedAsync]);
    return [sync, counter > 0];
}
//# sourceMappingURL=useAsyncCallbackBusyState.jsx.map