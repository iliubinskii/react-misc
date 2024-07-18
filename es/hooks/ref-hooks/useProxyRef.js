import React from "react";
/**
 * Proxy ref hook.
 * @param value - Value.
 * @returns Ref.
 */
export function useProxyRef(value) {
    const ref = React.useRef(value);
    ref.current = value;
    return ref;
}
//# sourceMappingURL=useProxyRef.js.map