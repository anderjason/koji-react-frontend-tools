"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KojiReactConfig = void 0;
const React = require("react");
const koji_frontend_tools_1 = require("@anderjason/koji-frontend-tools");
const util_1 = require("@anderjason/util");
const skytree_1 = require("skytree");
class KojiReactConfig extends React.Component {
    constructor() {
        super(...arguments);
        this._actor = new skytree_1.Actor({});
        this.state = {
            vccData: koji_frontend_tools_1.KojiTools.instance.vccData.state.value,
            sessionMode: koji_frontend_tools_1.KojiTools.instance.sessionMode.value,
            currentMode: koji_frontend_tools_1.KojiTools.instance.currentMode.value,
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
        this._actor.activate();
        this._actor.cancelOnDeactivate(koji_frontend_tools_1.KojiTools.instance.vccData.state.didChange.subscribe((vccData) => {
            this.setState({
                vccData,
            });
        }));
        this._actor.cancelOnDeactivate(koji_frontend_tools_1.KojiTools.instance.currentMode.didChange.subscribe((currentMode) => {
            this.setState({
                currentMode,
            });
        }));
        this._actor.cancelOnDeactivate(koji_frontend_tools_1.KojiTools.instance.sessionMode.didChange.subscribe((sessionMode) => {
            this.setState({
                sessionMode,
            });
        }));
    }
    componentWillUnmount() {
        if (this._actor != null) {
            this._actor.deactivate();
        }
    }
    render() {
        const { vccData = {}, currentMode, sessionMode } = this.state;
        const output = this.props.render({
            sessionMode,
            currentMode,
            vccData,
            update: this.update,
        });
        return output;
    }
}
exports.KojiReactConfig = KojiReactConfig;
//# sourceMappingURL=index.js.map