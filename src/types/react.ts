/* eslint-disable misc/no-self-import -- Wait for eslint-plugin-misc update */

import type * as React from "react";

export interface FunctionComponent<T extends object> {
  /**
   * Function component.
   *
   * @param props - Properties.
   * @returns JSX element.
   */
  (props: T): React.JSX.Element | undefined;
}

export interface FunctionComponentNoProps {
  /**
   * Function component.
   *
   * @returns JSX element.
   */
  (): React.JSX.Element | undefined;
}
