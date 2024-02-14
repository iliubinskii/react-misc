import { dictionary } from "typescript-misc";
import type { CommonProps } from "../types";
import type { lang } from "typescript-misc";
declare global {
    namespace facades {
        namespace lang {
            interface Context {
                readonly SampleContext: true;
            }
        }
    }
}
export declare const LangProvider: import("../types").FunctionComponent<Props>;
/**
 * Consumes lang context.
 *
 * @returns Lang context.
 */
export declare function useLang<W extends lang.Word = never, C extends lang.Context = never>(): lang.Lang<W, C>;
/**
 * @internal
 */
export interface Props extends CommonProps.Children {
    readonly definitions: dictionary.Definitions;
}
//# sourceMappingURL=lang.d.ts.map