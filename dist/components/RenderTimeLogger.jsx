"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const functions_1 = require("../functions");
const contexts_1 = require("../contexts");
const hooks_1 = require("../hooks");
exports.default = (0, functions_1.memo)("RenderTimeLogger", ({ children, name }) => {
    const { log } = (0, contexts_1.useLogger)();
    const t1 = react_1.default.useRef(Date.now()).current;
    (0, hooks_1.useRealEffect)(() => {
        const t2 = Date.now();
        const time = Math.round(t2 - t1).toLocaleString();
        log(`${name}: Rendered in ${time} ms`);
    }, []);
    return <>{children}</>;
});
//# sourceMappingURL=RenderTimeLogger.jsx.map