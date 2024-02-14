import * as React from "react";
import type { CommonProps } from "../types";
import { memo } from "../functions";
import { useLogger } from "../contexts";
import { useRealEffect } from "../hooks";

export default memo("RenderTimeLogger", ({ children, name }: Props) => {
  const { log } = useLogger();

  const t1 = React.useRef(Date.now()).current;

  useRealEffect(() => {
    const t2 = Date.now();

    const time = Math.round(t2 - t1).toLocaleString();

    log(`${name}: Rendered in ${time} ms`);
  }, []);

  // eslint-disable-next-line react/jsx-no-useless-fragment -- Ok
  return <>{children}</>;
});

/**
 * @internal
 */
export interface Props extends CommonProps.Children {
  readonly name: string;
}
