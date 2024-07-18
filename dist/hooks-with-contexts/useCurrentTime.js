"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCurrentTime = useCurrentTime;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const core_1 = require("../core");
const contexts_1 = require("../contexts");
const hooks_1 = require("../hooks");
/**
 * Current time hook.
 * @returns Current time.
 */
function useCurrentTime() {
    const datetime = (0, contexts_1.useDatetime)();
    const [currentTime, setCurrentTime] = react_1.default.useState(datetime.create().setStartOfMinute().toString());
    (0, hooks_1.useInterval)(() => {
        setCurrentTime(datetime.create().setStartOfMinute().toString());
    }, [datetime], interval);
    return currentTime;
}
const { interval } = core_1.consts.hooks.useCurrentTime;
//# sourceMappingURL=useCurrentTime.js.map