import * as React from "react";
import type { IndexedRecord, Rec } from "typescript-misc";
import { fn, o } from "typescript-misc";
import { useRealEffect } from "../common-hooks";

/**
 * Enumeration hook.
 *
 * @param configFactory - Configuration factory.
 * @param deps - Dependencies.
 * @returns Stateful enumeration value.
 */
export function useEnumConfig<T extends string>(
  configFactory: () => Config<T>,
  deps: React.DependencyList
): Tuple<T> {
  const {
    enumeration,
    initialState,
    onSet = fn.noop,
    resetOnInitialStateChange = false
  } =
    // eslint-disable-next-line react-hooks/exhaustive-deps -- Ok
    React.useMemo(configFactory, deps);

  const ref = React.useRef(initialState);

  const [state, setState] = React.useState(initialState);

  const setEnumState = React.useMemo(
    () =>
      o.map(enumeration, nextState => () => {
        if (nextState === ref.current) {
          // Already set
        } else {
          ref.current = nextState;
          setState(nextState);
          onSet(nextState);
        }
      }),
    [enumeration, onSet]
  );

  const setEnumStateNoEvent = React.useMemo(
    () =>
      o.map(enumeration, nextState => () => {
        ref.current = nextState;
        setState(nextState);
      }),
    [enumeration]
  );

  const setEnumStateToValue = React.useCallback(
    (value: T) => {
      ref.current = value;
      setState(value);
      onSet(value);
    },
    [onSet]
  );

  const setEnumStateToValueNoEvent = React.useCallback((value: T) => {
    ref.current = value;
    setState(value);
  }, []);

  useRealEffect(() => {
    if (resetOnInitialStateChange) setState(initialState);
  }, [initialState]);

  return React.useMemo(
    () => [
      state,
      setEnumState,
      setEnumStateToValue,
      ref,
      setEnumStateNoEvent,
      setEnumStateToValueNoEvent
    ],
    [
      setEnumState,
      setEnumStateNoEvent,
      setEnumStateToValue,
      setEnumStateToValueNoEvent,
      state
    ]
  );
}

export interface Config<T extends string> {
  readonly enumeration: IndexedRecord<T>;
  readonly initialState: T;
  /**
   * Handles "OnSet" event.
   *
   * @param state - State.
   */
  readonly onSet?: (state: T) => void;
  readonly resetOnInitialStateChange?: boolean;
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
export interface SetEnumStateNoEvent {
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
export interface SetEnumStateToValueNoEvent<T extends string> {
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
  Readonly<React.MutableRefObject<T>>,
  Rec<T, SetEnumStateNoEvent>,
  SetEnumStateToValueNoEvent<T>
];
