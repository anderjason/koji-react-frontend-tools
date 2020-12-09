"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KojiReactConfig = void 0;
const React = require("react");
const koji_frontend_tools_1 = require("@anderjason/koji-frontend-tools");
const util_1 = require("@anderjason/util");
class KojiReactConfig extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            vccData: koji_frontend_tools_1.KojiTools.instance.vccData.state.value,
        };
        this.update = (path, value) => {
            let valuePath;
            if (typeof path === "string") {
                valuePath = util_1.ValuePath.givenString(path);
            }
            else if (Array.isArray(path)) {
                valuePath = util_1.ValuePath.givenParts(path);
            }
            else {
                valuePath = path;
            }
            koji_frontend_tools_1.KojiTools.instance.vccData.update(valuePath, value);
        };
    }
    componentDidMount() {
        this._receipt = koji_frontend_tools_1.KojiTools.instance.vccData.state.didChange.subscribe((vccData) => {
            this.setState({
                vccData,
            });
        });
    }
    componentWillUnmount() {
        if (this._receipt != null) {
            this._receipt.cancel();
            this._receipt = undefined;
        }
    }
    render() {
        const output = this.props.render({
            sessionMode: koji_frontend_tools_1.KojiTools.instance.sessionMode.value,
            currentMode: koji_frontend_tools_1.KojiTools.instance.currentMode.value,
            vccData: this.state.vccData || {},
            update: this.update,
        });
        return output;
    }
}
exports.KojiReactConfig = KojiReactConfig;
//# sourceMappingURL=index.js.map