import * as React from "react";
import { useRealEffect } from "../common-hooks";
/**
 * Deferred effect hook.
 *
 * @param effect - Imperative function.
 * @param deps - Dependencies.
 */
export function useDeferredEffect(effect, deps) {
    const [counter, setCounter] = React.useState(0);
    const deferredCounter = React.useDeferredValue(counter);
    // Execute deferred effect
    useRealEffect(() => {
        if (deferredCounter)
            effect();
    }, [deferredCounter]);
    // Trigger deferred effect
    useRealEffect(() => {
        setCounter(prevCounter => prevCounter + 1);
    }, deps);
}
//# sourceMappingURL=useDeferredEffect.js.map