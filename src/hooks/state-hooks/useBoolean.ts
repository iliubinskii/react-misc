import * as React from "react";
import { useRealEffect } from "../common-hooks";

/**
 * Boolean hook.
 *
 * @param initialState - Initial state.
 * @returns Stateful boolean value.
 */
export function useBoolean(initialState = false): Tuple {
  const ref = React.useRef(initialState);

  const [state, setState] = React.useState(initialState);

  const setFalse = React.useCallback(() => {
    setState(false);
  }, []);

  const setTrue = React.useCallback(() => {
    setState(true);
  }, []);

  const toggle = React.useCallback(() => {
    setState(prevState => !prevState);
  }, []);

  useRealEffect(() => {
    ref.current = state;
  }, [state]);

  return React.useMemo(
    () => [state, setTrue, setFalse, toggle, ref],
    [setFalse, setTrue, state, toggle]
  );
}

/**
 * @internal
 */
export interface SetFalse {
  /**
   * Sets stateful value to false.
   */
  (): void;
}

/**
 * @internal
 */
export interface SetTrue {
  /**
   * Sets stateful value to true.
   */
  (): void;
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
  SetTrue,
  SetFalse,
  Toggle,
  Readonly<React.MutableRefObject<boolean>>
];
