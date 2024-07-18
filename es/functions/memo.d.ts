import type { FunctionComponent, FunctionComponentNoProps } from "../types";
/**
 * Creates memorized component.
 * @param displayName - Display name.
 * @param functionComponent - Functional component.
 * @returns Memorized component.
 */
export declare function memo(displayName: string, functionComponent: FunctionComponentNoProps): FunctionComponentNoProps;
/**
 * Creates memorized component.
 * @param displayName - Display name.
 * @param functionComponent - Functional component.
 * @returns Memorized component.
 */
export declare function memo<T extends object>(displayName: string, functionComponent: FunctionComponent<T>): FunctionComponent<T>;
//# sourceMappingURL=memo.d.ts.map