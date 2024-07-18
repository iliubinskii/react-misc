import { useRealEffect, useResource } from "../common-hooks";
import React from "react";
/**
 * Delayed effect hook.
 * @param effect - Imperative function.
 * @param deps - Dependencies.
 * @param timeout - Timeout.
 */
export function useDelayedEffect(effect, deps, timeout) {
    const effectRef = React.useRef(effect);
    const handle = React.useRef();
    // Clear timeout
    useResource(() => () => {
        clearTimeout(handle.current);
    }, []);
    // Update effect
    useRealEffect(() => {
        effectRef.current = effect;
    }, []);
    useRealEffect(() => {
        clearTimeout(handle.current);
        handle.current = setTimeout(() => {
            effectRef.current();
        }, timeout);
    }, deps);
}
//# sourceMappingURL=useDelayedEffect.js.map