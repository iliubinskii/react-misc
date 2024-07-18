import React from "react";

/**
 * Proxy ref hook.
 * @param value - Value.
 * @returns Ref.
 */
export function useProxyRef<T>(value: T): Readonly<React.MutableRefObject<T>> {
  const ref = React.useRef(value);

  ref.current = value;

  return ref;
}
