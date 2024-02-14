import * as React from "react";
import type { IndexedRecord, Rec } from "typescript-misc";
import { o } from "typescript-misc";
import { useRealEffect } from "../common-hooks";

/**
 * Enumeration hook.
 *
 * @param initialState - Initial state.
 * @param enumeration - Enumeration.
 * @returns Stateful enumeration value.
 */
export function useEnum<T extends string>(
  initialState: T,
  enumeration: IndexedRecord<T>
): Tuple<T> {
  const ref = React.useRef(initialState);

  const [state, setState] = React.useState(initialState);

  const setEnumState = React.useMemo(
    () =>
      o.map(enumeration, nextState => () => {
        setState(nextState);
      }),
    [enumeration]
  );

  const setEnumStateToValue = React.useCallback((value: T) => {
    setState(value);
  }, []);

  useRealEffect(() => {
    ref.current = state;
  }, [state]);

  return React.useMemo(
    () => [state, setEnumState, setEnumStateToValue, ref],
    [setEnumState, setEnumStateToValue, state]
  );
}

/**
 * @internal
 */
export interface SetEnumState {
  /**
   * Sets state.
   */
  (): void;
}

/**
 * @internal
 */
export interface SetEnumStateToValue<T extends string> {
  /**
   * Sets state to a value.
   *
   * @param value - Value.
   */
  (value: T): void;
}

/**
 * @internal
 */
// eslint-disable-next-line misc/typescript/no-multi-type-tuples -- Ok
export type Tuple<T extends string> = readonly [
  T,
  Rec<T, SetEnumState>,
  SetEnumStateToValue<T>,
  Readonly<React.MutableRefObject<T>>
];
