"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayText = void 0;
const React = require("react");
const koji_frontend_tools_1 = require("@anderjason/koji-frontend-tools");
const observable_1 = require("@anderjason/observable");
class DisplayText extends React.PureComponent {
    constructor() {
        super(...arguments);
        this._ref = React.createRef();
        this._text = observable_1.Observable.ofEmpty(observable_1.Observable.isStrictEqual);
    }
    componentDidUpdate() {
        this._text.setValue(this.props.text);
    }
    componentDidMount() {
        this._text.setValue(this.props.text);
        this._actor = new koji_frontend_tools_1.DisplayText({
            parentElement: this._ref.current,
            text: this._text,
            displayType: this.props.displayType,
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
        return React.createElement("div", { className: "kft-text", ref: this._ref });
    }
}
exports.DisplayText = DisplayText;
//# sourceMappingURL=index.js.map