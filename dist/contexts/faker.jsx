"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFaker = exports.FakerProvider = void 0;
const tslib_1 = require("tslib");
require("react-native-get-random-values");
const React = tslib_1.__importStar(require("react"));
const functions_1 = require("../functions");
const typescript_misc_1 = require("typescript-misc");
exports.FakerProvider = (0, functions_1.memo)("FakerProvider", ({ children, faker }) => (<FakerContext.Provider value={faker}>{children}</FakerContext.Provider>));
/**
 * Consumes faker context.
 *
 * @returns Faker context.
 */
function useFaker() {
    return React.useContext(FakerContext);
}
exports.useFaker = useFaker;
const FakerContext = React.createContext((0, typescript_misc_1.neverDemand)());
//# sourceMappingURL=faker.jsx.map