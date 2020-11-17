"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadingIndicator = void 0;
const React = require("react");
const koji_frontend_tools_1 = require("@anderjason/koji-frontend-tools");
const color_1 = require("@anderjason/color");
const observable_1 = require("@anderjason/observable");
class LoadingIndicator extends React.PureComponent {
    constructor() {
        super(...arguments);
        this._ref = React.createRef();
        this._color = observable_1.Observable.ofEmpty(color_1.Color.isEqual);
        this._hexColor = observable_1.Observable.ofEmpty(observable_1.Observable.isStrictEqual);
    }
    componentDidUpdate() {
        this._hexColor.setValue(this.props.hexColor);
    }
    componentDidMount() {
        this._hexColor.setValue(this.props.hexColor);
        const receipt = this._hexColor.didChange.subscribe((hexColor) => {
            if (hexColor == null) {
                return;
            }
            this._color.setValue(color_1.Color.givenHexString(hexColor));
        }, true);
        this._actor = new koji_frontend_tools_1.LoadingIndicator({
            parentElement: this._ref.current,
            color: this._color,
        });
        this._actor.activate();
        this._actor.cancelOnDeactivate(receipt);
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
exports.LoadingIndicator = LoadingIndicator;
//# sourceMappingURL=index.js.map