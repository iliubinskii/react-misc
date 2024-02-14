import * as React from "react";
import { useRealEffect } from "../common-hooks";

/**
 * Incrementor hook.
 *
 * @param initialState - Initial state.
 * @returns Stateful numeric value.
 */
export function useIncrementor(initialState = 0): Tuple {
  const ref = React.useRef(initialState);

  const [state, setState] = React.useState(initialState);

  const incrementor = React.useCallback(() => {
    setState(prevState => prevState + 1);
  }, []);

  useRealEffect(() => {
    ref.current = state;
  }, [state]);

  return React.useMemo(
    () => [state, incrementor, setState, ref],
    [incrementor, setState, state]
  );
}

/**
 * @internal
 */
export interface Incrementor {
  /**
   * Increments stateful value by one.
   */
  (): void;
}

/**
 * @internal
 */
// eslint-disable-next-line misc/typescript/no-multi-type-tuples -- Ok
export type Tuple = readonly [
  number,
  Incrementor,
  React.Dispatch<React.SetStateAction<number>>,
  Readonly<React.MutableRefObject<number>>
];
