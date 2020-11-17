"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeToolbar = void 0;
const React = require("react");
const koji_frontend_tools_1 = require("@anderjason/koji-frontend-tools");
const observable_1 = require("@anderjason/observable");
class ThemeToolbar extends React.PureComponent {
    constructor() {
        super(...arguments);
        this._ref = React.createRef();
    }
    componentDidMount() {
        const output = observable_1.Observable.givenValue(this.props.defaultValue, observable_1.Observable.isStrictEqual);
        this._actor = new koji_frontend_tools_1.ThemeToolbar({
            parentElement: this._ref.current,
            output,
        });
        this._actor.activate();
        this._actor.cancelOnDeactivate(output.didChange.subscribe((value) => {
            if (this.props.onChange != null) {
                this.props.onChange(value);
            }
        }));
    }
    componentWillUnmount() {
        if (this._actor != null) {
            this._actor.deactivate();
            this._actor = undefined;
        }
    }
    render() {
        return React.createElement("div", { ref: this._ref });
    }
}
exports.ThemeToolbar = ThemeToolbar;
//# sourceMappingURL=index.js.map