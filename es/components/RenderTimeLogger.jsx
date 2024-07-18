import React from "react";
import { memo } from "../functions";
import { useLogger } from "../contexts";
import { useRealEffect } from "../hooks";
export default memo("RenderTimeLogger", ({ children, name }) => {
    const { log } = useLogger();
    const t1 = React.useRef(Date.now()).current;
    useRealEffect(() => {
        const t2 = Date.now();
        const time = Math.round(t2 - t1).toLocaleString();
        log(`${name}: Rendered in ${time} ms`);
    }, []);
    return <>{children}</>;
});
//# sourceMappingURL=RenderTimeLogger.jsx.map