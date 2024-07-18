"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LangProvider = void 0;
exports.useLang = useLang;
const tslib_1 = require("tslib");
const typescript_misc_1 = require("typescript-misc");
const react_1 = tslib_1.__importDefault(require("react"));
const functions_1 = require("../functions");
exports.LangProvider = (0, functions_1.memo)("LangProvider", ({ children, definitions }) => {
    const context = react_1.default.useMemo(() => typescript_misc_1.dictionary.Dictionary.create(definitions), [definitions]);
    return (<LangContext.Provider value={context}>{children}</LangContext.Provider>);
});
/**
 * Consumes lang context.
 * @returns Lang context.
 */
function useLang() {
    return react_1.default.useContext(LangContext);
}
const LangContext = react_1.default.createContext((0, typescript_misc_1.neverDemand)());
//# sourceMappingURL=lang.jsx.map