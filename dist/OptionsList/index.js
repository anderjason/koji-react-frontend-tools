"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionsList = void 0;
const React = require("react");
const koji_frontend_tools_1 = require("@anderjason/koji-frontend-tools");
const observable_1 = require("@anderjason/observable");
class OptionsList extends React.PureComponent {
    constructor() {
        super(...arguments);
        this._ref = React.createRef();
    }
    componentDidMount() {
        this._actor = new koji_frontend_tools_1.OptionsList({
            parentElement: this._ref.current,
            items: this.props.items || observable_1.ObservableArray.ofEmpty()
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
        return React.createElement("div", { ref: this._ref });
    }
}
exports.OptionsList = OptionsList;
//# sourceMappingURL=index.js.map