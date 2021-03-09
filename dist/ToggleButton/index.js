"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToggleButton = void 0;
const React = require("react");
const koji_frontend_tools_1 = require("@anderjason/koji-frontend-tools");
const observable_1 = require("@anderjason/observable");
class ToggleButton extends React.PureComponent {
    constructor() {
        super(...arguments);
        this._ref = React.createRef();
        this._isToggleActive = observable_1.Observable.ofEmpty(observable_1.Observable.isStrictEqual);
    }
    componentDidMount() {
        this._isToggleActive.setValue(this.props.defaultValue);
        this._actor = new koji_frontend_tools_1.ToggleButton({
            target: {
                type: "thisElement",
                element: this._ref.current,
            },
            isToggleActive: this._isToggleActive,
        });
        this._actor.activate();
        this._actor.cancelOnDeactivate(this._isToggleActive.didChange.subscribe(isToggleActive => {
            this.props.onChange(isToggleActive);
        }));
    }
    componentWillUnmount() {
        if (this._actor != null) {
            this._actor.deactivate();
            this._actor = undefined;
        }
    }
    render() {
        return React.createElement("button", { ref: this._ref });
    }
}
exports.ToggleButton = ToggleButton;
//# sourceMappingURL=index.js.map