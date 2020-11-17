"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
const React = require("react");
const koji_frontend_tools_1 = require("@anderjason/koji-frontend-tools");
class Card extends React.PureComponent {
    constructor() {
        super(...arguments);
        this._ref = React.createRef();
    }
    componentDidMount() {
        this._actor = new koji_frontend_tools_1.Card({
            target: {
                type: "thisElement",
                element: this._ref.current,
            },
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
exports.Card = Card;
//# sourceMappingURL=index.js.map