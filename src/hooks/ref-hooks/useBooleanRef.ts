import * as React from "react";

/**
 * Boolean ref hook.
 *
 * @param initialValue - Initial value.
 * @returns Boolean ref.
 */
export function useBooleanRef(initialValue = false): Tuple {
  const value = React.useRef(initialValue);

  const setTrue = React.useCallback(() => {
    value.current = true;
  }, []);

  const setFalse = React.useCallback(() => {
    value.current = false;
  }, []);

  const toggle = React.useCallback(() => {
    value.current = !value.current;
  }, []);

  return React.useMemo(
    () => [value, setTrue, setFalse, toggle],
    [setFalse, setTrue, toggle, value]
  );
}

/**
 * @internal
 */
export interface SetFalse {
  /**
   * Sets ref to false.
   */
  (): void;
}

/**
 * @internal
 */
export interface SetTrue {
  /**
   * Sets ref to true.
   */
  (): void;
}

/**
 * @internal
 */
export interface Toggle {
  /**
   * Toggles ref.
   */
  (): void;
}

/**
 * @internal
 */
// eslint-disable-next-line misc/typescript/no-multi-type-tuples -- Ok
export type Tuple = readonly [
  Readonly<React.MutableRefObject<boolean>>,
  SetTrue,
  SetFalse,
  Toggle
];
