"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlignBottom = void 0;
const React = require("react");
const ReactDOM = require("react-dom");
const koji_frontend_tools_1 = require("@anderjason/koji-frontend-tools");
const observable_1 = require("@anderjason/observable");
const BooleanUtil_1 = require("@anderjason/util/dist/BooleanUtil");
class AlignBottom extends React.Component {
    constructor() {
        super(...arguments);
        this._ref = React.createRef();
        this._isRemixing = observable_1.Observable.ofEmpty(observable_1.Observable.isStrictEqual);
    }
    componentDidUpdate() {
        this._isRemixing.setValue(BooleanUtil_1.BooleanUtil.booleanGivenBooleanLike(this.props.isRemixing || false));
        ReactDOM.render(React.createElement(React.Fragment, null, this.props.children), this._actor.element);
    }
    componentDidMount() {
        this._isRemixing.setValue(BooleanUtil_1.BooleanUtil.booleanGivenBooleanLike(this.props.isRemixing || false));
        this._actor = new koji_frontend_tools_1.AlignBottom({
            target: {
                type: "thisElement",
                element: this._ref.current,
            },
            isRemixing: this._isRemixing,
        });
        this._actor.activate();
        ReactDOM.render(React.createElement(React.Fragment, null, this.props.children), this._actor.element);
    }
    componentWillUnmount() {
        if (this._actor != null) {
            this._actor.deactivate();
            this._actor = undefined;
        }
    }
    render() {
        return React.createElement("div", { className: "alignbottom", ref: this._ref });
    }
}
exports.AlignBottom = AlignBottom;
//# sourceMappingURL=index.js.map