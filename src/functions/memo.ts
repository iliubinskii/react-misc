import type { FunctionComponent, FunctionComponentNoProps } from "../types";
import React from "react";
import { defineFn } from "typescript-misc";

/**
 * Creates memorized component.
 * @param displayName - Display name.
 * @param functionComponent - Functional component.
 * @returns Memorized component.
 */
export function memo(
  displayName: string,
  functionComponent: FunctionComponentNoProps
): FunctionComponentNoProps;

/**
 * Creates memorized component.
 * @param displayName - Display name.
 * @param functionComponent - Functional component.
 * @returns Memorized component.
 */
export function memo<T extends object>(
  displayName: string,
  functionComponent: FunctionComponent<T>
): FunctionComponent<T>;

/**
 * Creates memorized component.
 * @param displayName - Display name.
 * @param functionComponent - Functional component.
 * @returns Memorized component.
 */
export function memo<T extends object>(
  displayName: string,
  functionComponent: FunctionComponent<T>
): FunctionComponent<T> {
  const named = defineFn(functionComponent, { displayName });

  // eslint-disable-next-line no-type-assertion/no-type-assertion -- Ok
  return React.memo(named) as unknown as FunctionComponent<T>;
}
