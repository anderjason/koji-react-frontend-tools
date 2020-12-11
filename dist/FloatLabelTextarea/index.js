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
    }
    componentDidUpdate() {
        this._isInvalid.setValue(this.props.isInvalid || false);
    }
    componentDidMount() {
        this._isInvalid.setValue(this.props.isInvalid || false);
        const value = observable_1.Observable.givenValue(this.props.defaultValue, observable_1.Observable.isStrictEqual);
        this._actor = new koji_frontend_tools_1.FloatLabelTextarea({
            parentElement: this._ref.current,
            value,
            displayTextGivenValue: (v) => v,
            valueGivenDisplayText: (v) => v,
            placeholder: this.props.placeholderLabel,
            persistentLabel: this.props.persistentLabel,
            maxLength: this.props.maxLength,
            isInvalid: this._isInvalid
        });
        this._actor.activate();
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