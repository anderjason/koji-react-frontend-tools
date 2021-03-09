"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
const React = require("react");
const ReactDOM = require("react-dom");
const koji_frontend_tools_1 = require("@anderjason/koji-frontend-tools");
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
                        onRemoved: requestedPage.onRemoved,
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
            let content;
            if (this.props.renderContent != null) {
                content = this.props.renderContent();
            }
            else {
                content = null;
            }
            ReactDOM.render(React.createElement(React.Fragment, null, content), this._actor.element);
            let footerContent;
            if (this.props.renderFooterContent != null) {
                footerContent = this.props.renderFooterContent();
            }
            else {
                footerContent = null;
            }
            ReactDOM.render(React.createElement(React.Fragment, null, footerContent), this._actor.footerElement);
            let hiddenContent;
            if (this.props.renderHiddenContent != null) {
                hiddenContent = this.props.renderHiddenContent();
            }
            else {
                hiddenContent = null;
            }
            ReactDOM.render(React.createElement(React.Fragment, null, hiddenContent), this._actor.hiddenElement);
            this._layoutDatas.forEach((layoutData, idx) => {
                const additionalPage = requestedPages[idx];
                layoutData.title.setValue(additionalPage.title);
                layoutData.anchorBottom.setValue(additionalPage.anchorBottom || false);
                let pageContent;
                if (additionalPage.renderContent != null) {
                    pageContent = additionalPage.renderContent();
                }
                else {
                    pageContent = null;
                }
                ReactDOM.render(React.createElement(React.Fragment, null, pageContent), layoutData.layout.element);
                let pageFooterContent;
                if (additionalPage.renderFooterContent != null) {
                    pageFooterContent = additionalPage.renderFooterContent();
                }
                else {
                    pageFooterContent = null;
                }
                console.log("footer", layoutData.layout.footerElement);
                ReactDOM.render(React.createElement(React.Fragment, null, pageFooterContent), layoutData.layout.footerElement);
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
        }, true));
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