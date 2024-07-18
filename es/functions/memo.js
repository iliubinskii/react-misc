import React from "react";
import { defineFn } from "typescript-misc";
/**
 * Creates memorized component.
 * @param displayName - Display name.
 * @param functionComponent - Functional component.
 * @returns Memorized component.
 */
export function memo(displayName, functionComponent) {
    const named = defineFn(functionComponent, { displayName });
    // eslint-disable-next-line no-type-assertion/no-type-assertion -- Ok
    return React.memo(named);
}
//# sourceMappingURL=memo.js.map