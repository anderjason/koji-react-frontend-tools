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
    }
    componentDidMount() {
        const value = observable_1.Observable.givenValue(this.props.defaultValue, money_1.Money.isEqual);
        this._actor = new koji_frontend_tools_1.MoneyInput({
            parentElement: this._ref.current,
            value,
            persistentLabel: this.props.persistentLabel,
        });
        this._actor.activate();
        this._actor.cancelOnDeactivate(value.didChange.subscribe((money) => {
            if (this.props.onChange != null) {
                this.props.onChange(money);
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
        return React.createElement("div", { ref: this._ref });
    }
}
exports.MoneyInput = MoneyInput;
//# sourceMappingURL=index.js.map