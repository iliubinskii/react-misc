import "react-native-get-random-values";
import type { CommonProps } from "../types";
import React from "react";
import { memo } from "../functions";
import { neverDemand } from "typescript-misc";

export const UniqueIdProvider = memo(
  "UniqueIdProvider",
  ({ children, uuid }: Props) => (
    <UniqueIdContext.Provider value={uuid}>{children}</UniqueIdContext.Provider>
  )
);

/**
 * Consumes unique ID context.
 * @returns Unique ID context.
 */
export function useUniqueId(): Uuid {
  return React.useContext(UniqueIdContext);
}

/**
 * @internal
 */
export interface Props extends CommonProps.Children {
  readonly uuid: Uuid;
}

/**
 * @internal
 */
export interface Uuid {
  /**
   * Generates unique ID.
   * @returns Unique ID.
   */
  (): string;
}

const UniqueIdContext = React.createContext(neverDemand<Uuid>());
