import * as React from "react";
import { defineFn } from "typescript-misc";
export function memo(displayName, functionComponent) {
    const named = defineFn(functionComponent, { displayName });
    return React.memo(named);
}
//# sourceMappingURL=memo.js.map