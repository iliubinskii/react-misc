"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCurrentTime = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const core_1 = require("../core");
const contexts_1 = require("../contexts");
const hooks_1 = require("../hooks");
/**
 * Current time hook.
 *
 * @returns Current time.
 */
function useCurrentTime() {
    const datetime = (0, contexts_1.useDatetime)();
    const [currentTime, setCurrentTime] = React.useState(datetime.create().setStartOfMinute().toString());
    (0, hooks_1.useInterval)(() => {
        setCurrentTime(datetime.create().setStartOfMinute().toString());
    }, [datetime], interval);
    return currentTime;
}
exports.useCurrentTime = useCurrentTime;
const { interval } = core_1.consts.hooks.useCurrentTime;
//# sourceMappingURL=useCurrentTime.js.map