import * as React from "react";
import { dictionary, neverDemand } from "typescript-misc";
import type { CommonProps } from "../types";
import type { lang } from "typescript-misc";
import { memo } from "../functions";

declare global {
  namespace facades {
    namespace lang {
      interface Context {
        readonly SampleContext: true;
      }
    }
  }
}

export const LangProvider = memo(
  "LangProvider",
  ({ children, definitions }: Props) => {
    const context = React.useMemo(
      (): lang.Facade => dictionary.Dictionary.create(definitions),
      [definitions]
    );

    return (
      <LangContext.Provider value={context}>{children}</LangContext.Provider>
    );
  }
);

/**
 * Consumes lang context.
 *
 * @returns Lang context.
 */
export function useLang<
  W extends lang.Word = never,
  C extends lang.Context = never
>(): lang.Lang<W, C> {
  return React.useContext(LangContext);
}

/**
 * @internal
 */
export interface Props extends CommonProps.Children {
  readonly definitions: dictionary.Definitions;
}

const LangContext = React.createContext(neverDemand<lang.Facade>());
