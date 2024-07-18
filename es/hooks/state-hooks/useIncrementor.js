import React from "react";
import { useRealEffect } from "../common-hooks";
/**
 * Incrementor hook.
 * @param initialState - Initial state.
 * @returns Stateful numeric value.
 */
export function useIncrementor(initialState = 0) {
    const ref = React.useRef(initialState);
    const [state, setState] = React.useState(initialState);
    const incrementor = React.useCallback(() => {
        setState(prevState => prevState + 1);
    }, []);
    useRealEffect(() => {
        ref.current = state;
    }, [state]);
    return React.useMemo(() => [state, incrementor, setState, ref], [incrementor, setState, state]);
}
//# sourceMappingURL=useIncrementor.js.map