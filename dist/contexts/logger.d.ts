import type { CommonProps } from "../types";
import type { strings } from "typescript-misc";
export declare const LoggerProvider: import("../types").FunctionComponent<Props>;
/**
 * Consumes logger context.
 *
 * @returns Logger context.
 */
export declare function useLogger(): Context;
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
//# sourceMappingURL=logger.d.ts.map