"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegerInput = void 0;
const React = require("react");
const koji_frontend_tools_1 = require("@anderjason/koji-frontend-tools");
const observable_1 = require("@anderjason/observable");
class IntegerInput extends React.Component {
    constructor() {
        super(...arguments);
        this._ref = React.createRef();
        this._errorLabel = observable_1.Observable.ofEmpty(observable_1.Observable.isStrictEqual);
        this._persistentLabel = observable_1.Observable.ofEmpty(observable_1.Observable.isStrictEqual);
        this._placeholderLabel = observable_1.Observable.ofEmpty(observable_1.Observable.isStrictEqual);
        this._supportLabel = observable_1.Observable.ofEmpty(observable_1.Observable.isStrictEqual);
    }
    componentDidUpdate() {
        this._errorLabel.setValue(this.props.errorLabel);
        this._persistentLabel.setValue(this.props.persistentLabel);
        this._placeholderLabel.setValue(this.props.placeholderLabel);
        this._supportLabel.setValue(this.props.supportLabel);
    }
    componentDidMount() {
        this._errorLabel.setValue(this.props.errorLabel);
        this._persistentLabel.setValue(this.props.persistentLabel);
        this._placeholderLabel.setValue(this.props.placeholderLabel);
        this._supportLabel.setValue(this.props.supportLabel);
        const value = observable_1.Observable.givenValue(this.props.defaultValue, observable_1.Observable.isStrictEqual);
        this._actor = new koji_frontend_tools_1.IntegerInput({
            errorLabel: this._errorLabel,
            parentElement: this._ref.current,
            persistentLabel: this._persistentLabel,
            placeholderLabel: this._placeholderLabel,
            supportLabel: this._supportLabel,
            value,
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
        this._actor.cancelOnDeactivate(value.didChange.subscribe((n) => {
            try {
                if (this.props.onChange != null) {
                    this.props.onChange(n);
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
        return React.createElement("div", { className: "kft-control", ref: this._ref });
    }
}
exports.IntegerInput = IntegerInput;
//# sourceMappingURL=index.js.map