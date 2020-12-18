"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditableText = void 0;
const koji_frontend_tools_1 = require("@anderjason/koji-frontend-tools");
const observable_1 = require("@anderjason/observable");
const React = require("react");
class EditableText extends React.Component {
    constructor() {
        super(...arguments);
        this._ref = React.createRef();
        this._theme = observable_1.Observable.ofEmpty(observable_1.Observable.isStrictEqual);
        this._maxLength = observable_1.Observable.ofEmpty(observable_1.Observable.isStrictEqual);
        this._isInvalid = observable_1.Observable.ofEmpty(observable_1.Observable.isStrictEqual);
    }
    componentDidUpdate() {
        this._theme.setValue(this.props.theme);
        this._maxLength.setValue(this.props.maxLength);
        this._isInvalid.setValue(this.props.isInvalid);
    }
    componentDidMount() {
        this._theme.setValue(this.props.theme);
        this._maxLength.setValue(this.props.maxLength);
        this._isInvalid.setValue(this.props.isInvalid);
        const value = observable_1.Observable.givenValue(this.props.defaultValue, observable_1.Observable.isStrictEqual);
        this._actor = new koji_frontend_tools_1.EditableText({
            parentElement: this._ref.current,
            output: value,
            displayType: this.props.displayType,
            placeholderLabel: this.props.placeholderLabel,
            theme: this._theme,
            maxLength: this._maxLength,
            isInvalid: this._isInvalid
        });
        this._actor.activate();
        this._actor.cancelOnDeactivate(this._actor.isFocused.didChange.subscribe(isFocused => {
            if (isFocused == true) {
                if (this.props.onFocus != null) {
                    this.props.onFocus();
                }
            }
            else if (isFocused == false) {
                if (this.props.onBlur != null) {
                    this.props.onBlur();
                }
            }
        }));
        this._actor.cancelOnDeactivate(value.didChange.subscribe(text => {
            try {
                if (this.props.onChange != null) {
                    this.props.onChange(text);
                }
            }
            catch (err) {
                console.warn(err);
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
        return React.createElement("div", { className: "kft-text", ref: this._ref });
    }
}
exports.EditableText = EditableText;
//# sourceMappingURL=index.js.map