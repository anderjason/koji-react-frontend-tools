"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublishButton = void 0;
const React = require("react");
const koji_frontend_tools_1 = require("@anderjason/koji-frontend-tools");
const observable_1 = require("@anderjason/observable");
class PublishButton extends React.Component {
    constructor() {
        super(...arguments);
        this._ref = React.createRef();
        this._mode = observable_1.Observable.ofEmpty(observable_1.Observable.isStrictEqual);
    }
    componentDidUpdate() {
        this._mode.setValue(this.props.mode);
    }
    componentDidMount() {
        this._mode.setValue(this.props.mode);
        this._actor = new koji_frontend_tools_1.PublishButton({
            parentElement: this._ref.current,
            onClick: () => {
                this.props.onClick();
            },
            mode: this._mode
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
exports.PublishButton = PublishButton;
//# sourceMappingURL=index.js.map