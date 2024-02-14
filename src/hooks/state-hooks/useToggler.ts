import * as React from "react";
import { useRealEffect } from "../common-hooks";

/**
 * Toggle hook.
 *
 * @param initialState - Initial state.
 * @returns Stateful boolean value.
 */
export function useToggler(initialState = false): Tuple {
  const ref = React.useRef(initialState);

  const [state, setState] = React.useState(initialState);

  const toggle = React.useCallback(() => {
    setState(prevState => !prevState);
  }, []);

  useRealEffect(() => {
    ref.current = state;
  }, [state]);

  return React.useMemo(() => [state, toggle, ref], [state, toggle]);
}

/**
 * @internal
 */
export interface Toggle {
  /**
   * Toggles stateful value.
   */
  (): void;
}

/**
 * @internal
 */
// eslint-disable-next-line misc/typescript/no-multi-type-tuples -- Ok
export type Tuple = readonly [
  boolean,
  Toggle,
  Readonly<React.MutableRefObject<boolean>>
];
