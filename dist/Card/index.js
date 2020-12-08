"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
const React = require("react");
const koji_frontend_tools_1 = require("@anderjason/koji-frontend-tools");
const ReactDOM = require("react-dom");
class Card extends React.Component {
    constructor() {
        super(...arguments);
        this._ref = React.createRef();
    }
    componentDidUpdate() {
        ReactDOM.render(React.createElement(React.Fragment, null, this.props.children), this._actor.baseElement);
    }
    componentDidMount() {
        this._actor = new koji_frontend_tools_1.Card({
            target: {
                type: "thisElement",
                element: this._ref.current,
            },
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