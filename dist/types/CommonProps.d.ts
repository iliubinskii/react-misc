import type * as React from "react";
import type { stringU } from "typescript-misc";
export interface Children {
    readonly children?: React.ReactNode;
}
export interface ClassName {
    readonly className?: stringU;
}
export interface Closeable {
    /**
     * Closes component.
     */
    readonly onClose?: (() => void) | undefined;
}
export interface Pressable {
    /**
     * Handles long press event.
     */
    readonly onLongPress?: (() => void) | undefined;
    /**
     * Handles press event.
     */
    readonly onPress?: (() => void) | undefined;
    /**
     * Handles press in event.
     */
    readonly onPressIn?: (() => void) | undefined;
    /**
     * Handles press out event.
     */
    readonly onPressOut?: (() => void) | undefined;
}
//# sourceMappingURL=CommonProps.d.ts.map