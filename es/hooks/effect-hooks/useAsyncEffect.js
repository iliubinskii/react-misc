import { useRealEffect } from "../common-hooks";
/**
 * Async effect hook.
 *
 * @param effect - Imperative function.
 * @param deps - Dependencies.
 */
export function useAsyncEffect(effect, deps) {
    useRealEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises -- Ok
        effect();
    }, deps);
}
//# sourceMappingURL=useAsyncEffect.js.map