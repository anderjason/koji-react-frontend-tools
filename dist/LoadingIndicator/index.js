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
    }
    componentDidUpdate() {
        let color;
        if (typeof this.props.color === "string") {
            color = color_1.Color.givenHexString(this.props.color);
        }
        else {
            color = this.props.color || color_1.Color.givenHexString("#000");
        }
        this._color.setValue(color);
    }
    componentDidMount() {
        let color;
        if (typeof this.props.color === "string") {
            color = color_1.Color.givenHexString(this.props.color);
        }
        else {
            color = this.props.color || color_1.Color.givenHexString("#000");
        }
        this._color.setValue(color);
        this._actor = new koji_frontend_tools_1.LoadingIndicator({
            parentElement: this._ref.current,
            color: this._color,
        });
        this._actor.activate();
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