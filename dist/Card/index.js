"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
const React = require("react");
const koji_frontend_tools_1 = require("@anderjason/koji-frontend-tools");
const ReactDOM = require("react-dom");
const observable_1 = require("@anderjason/observable");
class Card extends React.Component {
    constructor() {
        super(...arguments);
        this._ref = React.createRef();
        this._mode = observable_1.Observable.ofEmpty(observable_1.Observable.isStrictEqual);
    }
    componentDidUpdate() {
        this._mode.setValue(this.props.mode);
        ReactDOM.render(React.createElement(React.Fragment, null, this.props.children), this._actor.baseElement);
    }
    componentDidMount() {
        this._mode.setValue(this.props.mode);
        this._actor = new koji_frontend_tools_1.Card({
            target: {
                type: "thisElement",
                element: this._ref.current,
            },
            maxHeight: this.props.maxHeight,
            mode: this._mode
        });
        this._actor.activate();
        ReactDOM.render(React.createElement(React.Fragment, null, this.props.children), this._actor.baseElement);
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
exports.Card = Card;
//# sourceMappingURL=index.js.map