"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionsList = void 0;
const React = require("react");
const koji_frontend_tools_1 = require("@anderjason/koji-frontend-tools");
class OptionsList extends React.PureComponent {
    constructor() {
        super(...arguments);
        this._ref = React.createRef();
    }
    componentDidMount() {
        this._actor = new koji_frontend_tools_1.OptionsList({
            parentElement: this._ref.current,
            defaultValues: this.props.defaultValues,
            definitions: this.props.definitions,
            onChange: this.props.onChange
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