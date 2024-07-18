import React from "react";
import { is } from "typescript-misc";

/**
 * State hook.
 * @param initialState - Initial state.
 * @returns Stateful value.
 */
export function useState<T>(initialState: T): Tuple<T> {
  const ref = React.useRef(initialState);

  const [state, setState] = React.useState(initialState);

  const resetState = React.useCallback(() => {
    ref.current = initialState;
    setState(initialState);
  }, [initialState]);

  const setStateWrapper = React.useCallback<
    React.Dispatch<React.SetStateAction<T>>
  >(value => {
    const normalized = is.callable(value) ? value(ref.current) : value;

    ref.current = normalized;
    setState(normalized);
  }, []);

  return React.useMemo(
    () => [state, setStateWrapper, resetState, ref],
    [resetState, setStateWrapper, state]
  );
}

/**
 * @internal
 */
export interface ResetState {
  /**
   * Resets state.
   */
  (): void;
}

/**
 * @internal
 */
export type Tuple<T> = readonly [
  T,
  React.Dispatch<React.SetStateAction<T>>,
  ResetState,
  Readonly<React.MutableRefObject<T>>
];
