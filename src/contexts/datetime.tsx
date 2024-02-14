import * as React from "react";
import { dateFnsWrapper, neverDemand } from "typescript-misc";
import type { CommonProps } from "../types";
import type { Locale } from "date-fns";
import type { datetime } from "typescript-misc";
import { memo } from "../functions";

export const DatetimeProvider = memo(
  "DatetimeProvider",
  ({ children, locale }: Props) => {
    const datetime = React.useMemo(() => dateFnsWrapper({ locale }), [locale]);

    return (
      <DatetimeContext.Provider value={datetime}>
        {children}
      </DatetimeContext.Provider>
    );
  }
);

/**
 * Consumes datetime context.
 *
 * @returns Datetime context.
 */
export function useDatetime(): datetime.Facade {
  return React.useContext(DatetimeContext);
}

/**
 * @internal
 */
export interface Props extends CommonProps.Children {
  readonly locale: Locale;
}

const DatetimeContext = React.createContext(neverDemand<datetime.Facade>());
