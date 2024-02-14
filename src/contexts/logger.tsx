import * as React from "react";
import { fn, neverDemand } from "typescript-misc";
import type { CommonProps } from "../types";
import { consts } from "../core";
import { memo } from "../functions";
import type { strings } from "typescript-misc";

export const LoggerProvider = memo(
  "LoggerProvider",
  ({ children, logger = fn.noop }: Props) => {
    const messages = React.useRef<strings>([]);

    const getMessages = React.useCallback(() => messages.current, []);

    const log = React.useCallback(
      (...nextMessages: strings) => {
        messages.current = [...messages.current, ...nextMessages].slice(-size);
        logger(...nextMessages);
      },
      [logger]
    );

    const context = React.useMemo(
      (): Context => ({ getMessages, log }),
      [getMessages, log]
    );

    return (
      <LoggerContext.Provider value={context}>
        {children}
      </LoggerContext.Provider>
    );
  }
);

/**
 * Consumes logger context.
 *
 * @returns Logger context.
 */
export function useLogger(): Context {
  return React.useContext(LoggerContext);
}

/**
 * @internal
 */
export interface Context {
  /**
   * Returns messages.
   *
   * @returns Messages.
   */
  readonly getMessages: () => strings;
  /**
   * Adds messages to the log.
   *
   * @param messages - Messages.
   */
  readonly log: (...messages: strings) => void;
}

/**
 * @internal
 */
export interface Props extends CommonProps.Children {
  /**
   * External logger.
   *
   * @param messages - Messages.
   */
  readonly logger?: ((...messages: strings) => void) | undefined;
}

const LoggerContext = React.createContext(neverDemand<Context>());

const { size } = consts.contexts.logger;
