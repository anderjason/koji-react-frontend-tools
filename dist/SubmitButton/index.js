"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmitButton = void 0;
const React = require("react");
const koji_frontend_tools_1 = require("@anderjason/koji-frontend-tools");
const observable_1 = require("@anderjason/observable");
class SubmitButton extends React.PureComponent {
    constructor() {
        super(...arguments);
        this._ref = React.createRef();
        this._text = observable_1.Observable.ofEmpty(observable_1.Observable.isStrictEqual);
        this._mode = observable_1.Observable.ofEmpty(observable_1.Observable.isStrictEqual);
    }
    componentDidUpdate() {
        this._text.setValue(this.props.text);
        this._mode.setValue(this.props.mode);
    }
    componentDidMount() {
        this._text.setValue(this.props.text);
        this._mode.setValue(this.props.mode);
        this._actor = new koji_frontend_tools_1.SubmitButton({
            target: {
                type: "thisElement",
                element: this._ref.current,
            },
            buttonMode: this._mode,
            onClick: () => {
                this.props.onClick();
            },
            text: this._text,
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
        return React.createElement("button", { className: "kft-control", ref: this._ref });
    }
}
exports.SubmitButton = SubmitButton;
//# sourceMappingURL=index.js.map