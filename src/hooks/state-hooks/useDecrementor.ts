import React from "react";
import { useRealEffect } from "../common-hooks";

/**
 * Decrementor hook.
 * @param initialState - Initial state.
 * @returns Stateful numeric value.
 */
export function useDecrementor(initialState = 0): Tuple {
  const ref = React.useRef(initialState);

  const [state, setState] = React.useState(initialState);

  const decrementor = React.useCallback(() => {
    setState(prevState => prevState - 1);
  }, []);

  useRealEffect(() => {
    ref.current = state;
  }, [state]);

  return React.useMemo(
    () => [state, decrementor, setState, ref],
    [decrementor, setState, state]
  );
}

/**
 * @internal
 */
export interface Decrementor {
  /**
   * Decrements stateful value by one.
   */
  (): void;
}

/**
 * @internal
 */
export type Tuple = readonly [
  number,
  Decrementor,
  React.Dispatch<React.SetStateAction<number>>,
  Readonly<React.MutableRefObject<number>>
];
