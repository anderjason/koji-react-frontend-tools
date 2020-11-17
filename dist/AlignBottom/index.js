"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlignBottom = void 0;
const React = require("react");
const koji_frontend_tools_1 = require("@anderjason/koji-frontend-tools");
const observable_1 = require("@anderjason/observable");
class AlignBottom extends React.PureComponent {
    constructor() {
        super(...arguments);
        this._ref = React.createRef();
        this._isRemixing = observable_1.Observable.ofEmpty(observable_1.Observable.isStrictEqual);
    }
    componentDidUpdate() {
        this._isRemixing.setValue(this.props.isRemixing || false);
    }
    componentDidMount() {
        this._isRemixing.setValue(this.props.isRemixing || false);
        this._actor = new koji_frontend_tools_1.AlignBottom({
            target: {
                type: "thisElement",
                element: this._ref.current,
            },
            isRemixing: this._isRemixing,
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
        return React.createElement("div", { ref: this._ref }, this.props.children);
    }
}
exports.AlignBottom = AlignBottom;
//# sourceMappingURL=index.js.map