"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUniqueId = exports.UniqueIdProvider = void 0;
const tslib_1 = require("tslib");
require("react-native-get-random-values");
const React = tslib_1.__importStar(require("react"));
const functions_1 = require("../functions");
const typescript_misc_1 = require("typescript-misc");
exports.UniqueIdProvider = (0, functions_1.memo)("UniqueIdProvider", ({ children, uuid }) => (<UniqueIdContext.Provider value={uuid}>{children}</UniqueIdContext.Provider>));
/**
 * Consumes unique ID context.
 *
 * @returns Unique ID context.
 */
function useUniqueId() {
    return React.useContext(UniqueIdContext);
}
exports.useUniqueId = useUniqueId;
const UniqueIdContext = React.createContext((0, typescript_misc_1.neverDemand)());
//# sourceMappingURL=unique-id.jsx.map