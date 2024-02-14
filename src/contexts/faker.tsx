import "react-native-get-random-values";
import * as React from "react";
import type { CommonProps } from "../types";
import type { faker } from "typescript-misc";
import { memo } from "../functions";
import { neverDemand } from "typescript-misc";

export const FakerProvider = memo(
  "FakerProvider",
  ({ children, faker }: Props) => (
    <FakerContext.Provider value={faker}>{children}</FakerContext.Provider>
  )
);

/**
 * Consumes faker context.
 *
 * @returns Faker context.
 */
export function useFaker(): faker.Facade {
  return React.useContext(FakerContext);
}

/**
 * @internal
 */
export interface Props extends CommonProps.Children {
  readonly faker: faker.Facade;
}

const FakerContext = React.createContext(neverDemand<faker.Facade>());
