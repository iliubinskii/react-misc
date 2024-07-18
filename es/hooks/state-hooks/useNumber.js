import React from "react";
import { useRealEffect } from "../common-hooks";
/**
 * Number hook.
 * @param initialState - Initial state.
 * @returns Stateful numeric value.
 */
export function useNumber(initialState = 0) {
    const ref = React.useRef(initialState);
    const [state, setState] = React.useState(initialState);
    const decrementor = React.useCallback(() => {
        setState(prevState => prevState - 1);
    }, []);
    const incrementor = React.useCallback(() => {
        setState(prevState => prevState + 1);
    }, []);
    useRealEffect(() => {
        ref.current = state;
    }, [state]);
    return React.useMemo(() => [state, setState, incrementor, decrementor, ref], [decrementor, incrementor, setState, state]);
}
//# sourceMappingURL=useNumber.js.map