"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniqueIdProvider = void 0;
exports.useUniqueId = useUniqueId;
const tslib_1 = require("tslib");
require("react-native-get-random-values");
const react_1 = tslib_1.__importDefault(require("react"));
const functions_1 = require("../functions");
const typescript_misc_1 = require("typescript-misc");
exports.UniqueIdProvider = (0, functions_1.memo)("UniqueIdProvider", ({ children, uuid }) => (<UniqueIdContext.Provider value={uuid}>{children}</UniqueIdContext.Provider>));
/**
 * Consumes unique ID context.
 * @returns Unique ID context.
 */
function useUniqueId() {
    return react_1.default.useContext(UniqueIdContext);
}
const UniqueIdContext = react_1.default.createContext((0, typescript_misc_1.neverDemand)());
//# sourceMappingURL=unique-id.jsx.map