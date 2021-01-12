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
        this._layoutDatas = [];
        this._mode = observable_1.Observable.ofEmpty(observable_1.Observable.isStrictEqual);
        this._anchorBottom = observable_1.Observable.ofEmpty(observable_1.Observable.isStrictEqual);
        this.renderPages = () => {
            const requestedPages = this.props.additionalPages || [];
            if (this._layoutDatas.length < requestedPages.length) {
                const missingPageCount = requestedPages.length - this._layoutDatas.length;
                for (let i = 0; i < missingPageCount; i++) {
                    const requestedPage = requestedPages[requestedPages.length - missingPageCount + i];
                    const title = observable_1.Observable.ofEmpty(observable_1.Observable.isStrictEqual);
                    const anchorBottom = observable_1.Observable.ofEmpty(observable_1.Observable.isStrictEqual);
                    const layout = this._actor.addPage({
                        title,
                        anchorBottom,
                        onRemoved: requestedPage.onRemoved
                    });
                    this._layoutDatas.push({
                        title,
                        anchorBottom,
                        layout,
                    });
                }
            }
            else if (this._layoutDatas.length > requestedPages.length) {
                const excessPageCount = this._layoutDatas.length - requestedPages.length;
                for (let i = 0; i < excessPageCount; i++) {
                    const layoutData = this._layoutDatas.pop();
                    layoutData.layout.deactivate();
                }
            }
            ReactDOM.render(React.createElement(React.Fragment, null, this.props.children), this._actor.baseElement);
            this._layoutDatas.forEach((layoutData, idx) => {
                const additionalPage = requestedPages[idx];
                layoutData.title.setValue(additionalPage.title);
                layoutData.anchorBottom.setValue(additionalPage.anchorBottom || false);
                ReactDOM.render(React.createElement(React.Fragment, null, additionalPage.content), layoutData.layout.element);
                ReactDOM.render(React.createElement(React.Fragment, null, additionalPage.footerContent), layoutData.layout.footerElement);
            });
        };
    }
    componentDidUpdate() {
        this._mode.setValue(this.props.mode);
        this._anchorBottom.setValue(this.props.anchorBottom == null ? false : this.props.anchorBottom);
        this.renderPages();
    }
    componentDidMount() {
        this._mode.setValue(this.props.mode);
        this._anchorBottom.setValue(this.props.anchorBottom == null ? false : this.props.anchorBottom);
        this._actor = new koji_frontend_tools_1.Card({
            target: {
                type: "thisElement",
                element: this._ref.current,
            },
            maxHeight: this.props.maxHeight,
            mode: this._mode,
            anchorBottom: this._anchorBottom,
        });
        this._actor.activate();
        this._actor.cancelOnDeactivate(this._actor.selectedLayout.didChange.subscribe(() => {
            this.renderPages();
        }));
        ReactDOM.render(React.createElement(React.Fragment, null, this.props.children), this._actor.baseElement);
        ReactDOM.render(React.createElement(React.Fragment, null, this.props.footerContent), this._actor.baseFooterElement);
        ReactDOM.render(React.createElement(React.Fragment, null, this.props.hiddenContent), this._actor.hiddenElement);
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