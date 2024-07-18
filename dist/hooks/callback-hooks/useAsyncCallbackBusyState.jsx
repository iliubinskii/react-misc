"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAsyncCallbackBusyState = useAsyncCallbackBusyState;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
/**
 * Async callback hook.
 * @param async - Async callback.
 * @param deps - Dependencies.
 * @returns Sync function.
 */
function useAsyncCallbackBusyState(async, deps) {
    const [counter, setCounter] = react_1.default.useState(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- Ok
    const memorizedAsync = react_1.default.useCallback(async, deps);
    const sync = react_1.default.useCallback((...args) => {
        const promise = memorizedAsync(...args);
        setCounter(prevCounter => prevCounter + 1);
        promise
            // eslint-disable-next-line github/no-then -- Ok
            .then(() => {
            setCounter(prevCounter => prevCounter - 1);
        })
            // eslint-disable-next-line github/no-then -- Ok
            .catch((err) => {
            setCounter(prevCounter => prevCounter - 1);
            throw err;
        });
    }, [memorizedAsync]);
    return [sync, counter > 0];
}
//# sourceMappingURL=useAsyncCallbackBusyState.jsx.map