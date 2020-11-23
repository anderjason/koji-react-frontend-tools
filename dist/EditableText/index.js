"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditableText = void 0;
const React = require("react");
const koji_frontend_tools_1 = require("@anderjason/koji-frontend-tools");
const observable_1 = require("@anderjason/observable");
class EditableText extends React.PureComponent {
    constructor() {
        super(...arguments);
        this._ref = React.createRef();
        this._theme = observable_1.Observable.ofEmpty(observable_1.Observable.isStrictEqual);
    }
    componentDidUpdate() {
        this._theme.setValue(this.props.theme);
    }
    componentDidMount() {
        const value = observable_1.Observable.givenValue(this.props.defaultValue, observable_1.Observable.isStrictEqual);
        this._theme.setValue(this.props.theme);
        this._actor = new koji_frontend_tools_1.EditableText({
            parentElement: this._ref.current,
            output: value,
            displayType: this.props.displayType,
            placeholderLabel: this.props.placeholderLabel,
            theme: this._theme,
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
exports.EditableText = EditableText;
//# sourceMappingURL=index.js.map