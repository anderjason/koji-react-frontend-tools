"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KojiReactConfig = void 0;
const React = require("react");
const koji_frontend_tools_1 = require("@anderjason/koji-frontend-tools");
class KojiReactConfig extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            vccData: undefined,
        };
    }
    componentDidMount() {
        this._receipt = koji_frontend_tools_1.Koji.instance.vccData.state.didChange.subscribe((vccData) => {
            this.setState({
                vccData,
            });
        }, true);
    }
    componentWillUnmount() {
        if (this._receipt != null) {
            this._receipt.cancel();
            this._receipt = undefined;
        }
    }
    render() {
        const { vccData } = this.state;
        const output = this.props.render(vccData);
        return output;
    }
}
exports.KojiReactConfig = KojiReactConfig;
//# sourceMappingURL=index.js.map