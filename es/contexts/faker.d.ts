import "react-native-get-random-values";
import type { CommonProps } from "../types";
import type { faker } from "typescript-misc";
export declare const FakerProvider: import("../types").FunctionComponent<Props>;
/**
 * Consumes faker context.
 *
 * @returns Faker context.
 */
export declare function useFaker(): faker.Facade;
/**
 * @internal
 */
export interface Props extends CommonProps.Children {
    readonly faker: faker.Facade;
}
//# sourceMappingURL=faker.d.ts.map