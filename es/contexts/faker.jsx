import "react-native-get-random-values";
import * as React from "react";
import { memo } from "../functions";
import { neverDemand } from "typescript-misc";
export const FakerProvider = memo("FakerProvider", ({ children, faker }) => (<FakerContext.Provider value={faker}>{children}</FakerContext.Provider>));
/**
 * Consumes faker context.
 *
 * @returns Faker context.
 */
export function useFaker() {
    return React.useContext(FakerContext);
}
const FakerContext = React.createContext(neverDemand());
//# sourceMappingURL=faker.jsx.map