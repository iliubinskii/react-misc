import "react-native-get-random-values";
import type { CommonProps } from "../types";
export declare const UniqueIdProvider: import("../types").FunctionComponent<Props>;
/**
 * Consumes unique ID context.
 *
 * @returns Unique ID context.
 */
export declare function useUniqueId(): Uuid;
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
     *
     * @returns Unique ID.
     */
    (): string;
}
//# sourceMappingURL=unique-id.d.ts.map