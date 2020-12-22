"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FloatLabelTextarea = void 0;
const React = require("react");
const koji_frontend_tools_1 = require("@anderjason/koji-frontend-tools");
const observable_1 = require("@anderjason/observable");
class FloatLabelTextarea extends React.Component {
    constructor() {
        super(...arguments);
        this._ref = React.createRef();
        this._isInvalid = observable_1.Observable.ofEmpty(observable_1.Observable.isStrictEqual);
        this._maxLength = observable_1.Observable.ofEmpty(observable_1.Observable.isStrictEqual);
        this._maxRows = observable_1.Observable.ofEmpty(observable_1.Observable.isStrictEqual);
        this._minRows = observable_1.Observable.ofEmpty(observable_1.Observable.isStrictEqual);
    }
    componentDidUpdate() {
        this._isInvalid.setValue(this.props.isInvalid || false);
        this._maxLength.setValue(this.props.maxLength);
        this._maxRows.setValue(this.props.maxRows);
        this._minRows.setValue(this.props.minRows);
    }
    componentDidMount() {
        this._isInvalid.setValue(this.props.isInvalid || false);
        this._maxLength.setValue(this.props.maxLength);
        this._maxRows.setValue(this.props.maxRows);
        this._minRows.setValue(this.props.minRows);
        const value = observable_1.Observable.givenValue(this.props.defaultValue, observable_1.Observable.isStrictEqual);
        this._actor = new koji_frontend_tools_1.FloatLabelTextarea({
            displayTextGivenValue: (v) => v,
            isInvalid: this._isInvalid,
            maxLength: this._maxLength,
            maxRows: this._maxRows,
            minRows: this._minRows,
            parentElement: this._ref.current,
            persistentLabel: this.props.persistentLabel,
            placeholder: this.props.placeholderLabel,
            value,
            valueGivenDisplayText: (v) => v,
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
        this._actor.cancelOnDeactivate(value.didChange.subscribe((text) => {
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
        return React.createElement("div", { className: "kft-control", ref: this._ref });
    }
}
exports.FloatLabelTextarea = FloatLabelTextarea;
//# sourceMappingURL=index.js.map