"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerticalExpander = void 0;
const React = require("react");
const ReactDOM = require("react-dom");
const web_1 = require("@anderjason/web");
const observable_1 = require("@anderjason/observable");
class VerticalExpander extends React.Component {
    constructor() {
        super(...arguments);
        this._ref = React.createRef();
        this._isExpanded = observable_1.Observable.ofEmpty(observable_1.Observable.isStrictEqual);
        this.renderContent = () => {
            ReactDOM.render(React.createElement(React.Fragment, null, this.props.children), this._actor.element);
        };
    }
    componentDidUpdate() {
        this._isExpanded.setValue(this.props.isExpanded);
        this.renderContent();
    }
    componentDidMount() {
        this._isExpanded.setValue(this.props.isExpanded);
        this._actor = new web_1.VerticalExpander({
            parentElement: this._ref.current,
            isExpanded: this._isExpanded
        });
        this._actor.activate();
        this.renderContent();
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
exports.VerticalExpander = VerticalExpander;
//# sourceMappingURL=index.js.map