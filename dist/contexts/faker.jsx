"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FakerProvider = void 0;
exports.useFaker = useFaker;
const tslib_1 = require("tslib");
require("react-native-get-random-values");
const react_1 = tslib_1.__importDefault(require("react"));
const functions_1 = require("../functions");
const typescript_misc_1 = require("typescript-misc");
exports.FakerProvider = (0, functions_1.memo)("FakerProvider", ({ children, faker }) => (<FakerContext.Provider value={faker}>{children}</FakerContext.Provider>));
/**
 * Consumes faker context.
 * @returns Faker context.
 */
function useFaker() {
    return react_1.default.useContext(FakerContext);
}
const FakerContext = react_1.default.createContext((0, typescript_misc_1.neverDemand)());
//# sourceMappingURL=faker.jsx.map