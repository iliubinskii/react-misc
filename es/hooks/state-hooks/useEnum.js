import * as React from "react";
import { o } from "typescript-misc";
import { useRealEffect } from "../common-hooks";
/**
 * Enumeration hook.
 *
 * @param initialState - Initial state.
 * @param enumeration - Enumeration.
 * @returns Stateful enumeration value.
 */
export function useEnum(initialState, enumeration) {
    const ref = React.useRef(initialState);
    const [state, setState] = React.useState(initialState);
    const setEnumState = React.useMemo(() => o.map(enumeration, nextState => () => {
        setState(nextState);
    }), [enumeration]);
    const setEnumStateToValue = React.useCallback((value) => {
        setState(value);
    }, []);
    useRealEffect(() => {
        ref.current = state;
    }, [state]);
    return React.useMemo(() => [state, setEnumState, setEnumStateToValue, ref], [setEnumState, setEnumStateToValue, state]);
}
//# sourceMappingURL=useEnum.js.map