"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLang = exports.LangProvider = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const typescript_misc_1 = require("typescript-misc");
const functions_1 = require("../functions");
exports.LangProvider = (0, functions_1.memo)("LangProvider", ({ children, definitions }) => {
    const context = React.useMemo(() => typescript_misc_1.dictionary.Dictionary.create(definitions), [definitions]);
    return (<LangContext.Provider value={context}>{children}</LangContext.Provider>);
});
/**
 * Consumes lang context.
 *
 * @returns Lang context.
 */
function useLang() {
    return React.useContext(LangContext);
}
exports.useLang = useLang;
const LangContext = React.createContext((0, typescript_misc_1.neverDemand)());
//# sourceMappingURL=lang.jsx.map