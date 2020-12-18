"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoneyInput = void 0;
const React = require("react");
const koji_frontend_tools_1 = require("@anderjason/koji-frontend-tools");
const observable_1 = require("@anderjason/observable");
const money_1 = require("@anderjason/money");
class MoneyInput extends React.Component {
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
        const value = observable_1.Observable.givenValue(this.props.defaultValue, money_1.Money.isEqual);
        this._actor = new koji_frontend_tools_1.MoneyInput({
            parentElement: this._ref.current,
            value,
            persistentLabel: this.props.persistentLabel,
            maxValue: this.props.maxValue,
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
        this._actor.cancelOnDeactivate(value.didChange.subscribe((money) => {
            try {
                if (this.props.onChange != null) {
                    this.props.onChange(money);
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
exports.MoneyInput = MoneyInput;
//# sourceMappingURL=index.js.map