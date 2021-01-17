import * as React from "react";
import ReactDOM = require("react-dom");
import { Card as CardActor } from "@anderjason/koji-frontend-tools";
import { CardMode } from "@anderjason/koji-frontend-tools/dist/Card";
import { Observable } from "@anderjason/observable";
import { CardLayout } from "@anderjason/koji-frontend-tools/dist/Card/_internal/CardLayout";

export interface CardPage {
  anchorBottom?: boolean;
  onRemoved?: () => void;
  renderContent?: () => any;
  renderFooterContent?: () => any;
  title?: string;
}

export interface CardProps {
  additionalPages?: CardPage[];
  anchorBottom?: boolean;
  maxHeight?: number;
  mode?: CardMode;
  renderContent?: () => any;
  renderFooterContent?: () => any;
  renderHiddenContent?: () => any;
}

interface LayoutData {
  anchorBottom: Observable<boolean>;
  layout: CardLayout;
  title: Observable<string>;
}

export class Card extends React.Component<CardProps, any> {
  private _ref = React.createRef<HTMLDivElement>();
  private _actor: CardActor;
  private _layoutDatas: LayoutData[] = [];
  private _mode = Observable.ofEmpty<CardMode>(Observable.isStrictEqual);
  private _anchorBottom = Observable.ofEmpty<boolean>(Observable.isStrictEqual);

  componentDidUpdate() {
    this._mode.setValue(this.props.mode);
    this._anchorBottom.setValue(
      this.props.anchorBottom == null ? false : this.props.anchorBottom
    );

    this.renderPages();
  }

  componentDidMount() {
    this._mode.setValue(this.props.mode);
    this._anchorBottom.setValue(
      this.props.anchorBottom == null ? false : this.props.anchorBottom
    );

    this._actor = new CardActor({
      target: {
        type: "thisElement",
        element: this._ref.current,
      },
      maxHeight: this.props.maxHeight,
      mode: this._mode,
      anchorBottom: this._anchorBottom,
    });
    this._actor.activate();

    this._actor.cancelOnDeactivate(
      this._actor.selectedLayout.didChange.subscribe(() => {
        this.renderPages();
      }, true)
    );
  }

  componentWillUnmount() {
    if (this._actor != null) {
      this._actor.deactivate();
      this._actor = undefined;
    }
  }

  renderPages = () => {
    const requestedPages = this.props.additionalPages || [];

    if (this._layoutDatas.length < requestedPages.length) {
      const missingPageCount = requestedPages.length - this._layoutDatas.length;
      for (let i = 0; i < missingPageCount; i++) {
        const requestedPage =
          requestedPages[requestedPages.length - missingPageCount + i];

        const title = Observable.ofEmpty<string>(Observable.isStrictEqual);
        const anchorBottom = Observable.ofEmpty<boolean>(
          Observable.isStrictEqual
        );
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
    } else if (this._layoutDatas.length > requestedPages.length) {
      const excessPageCount = this._layoutDatas.length - requestedPages.length;
      for (let i = 0; i < excessPageCount; i++) {
        const layoutData = this._layoutDatas.pop();
        layoutData.layout.deactivate();
      }
    }

    let content;
    if (this.props.renderContent != null) {
      content = this.props.renderContent();
    } else {
      content = null;
    }

    ReactDOM.render(
      <React.Fragment>{content}</React.Fragment>,
      this._actor.element
    );

    let footerContent;
    if (this.props.renderFooterContent != null) {
      footerContent = this.props.renderFooterContent();
    } else {
      footerContent = null;
    }

    ReactDOM.render(
      <React.Fragment>{footerContent}</React.Fragment>,
      this._actor.footerElement
    );

    let hiddenContent;
    if (this.props.renderHiddenContent != null) {
      hiddenContent = this.props.renderHiddenContent();
    } else {
      hiddenContent = null;
    }

    ReactDOM.render(
      <React.Fragment>{hiddenContent}</React.Fragment>,
      this._actor.hiddenElement
    );


    this._layoutDatas.forEach((layoutData, idx) => {
      const additionalPage = requestedPages[idx];

      layoutData.title.setValue(additionalPage.title);
      layoutData.anchorBottom.setValue(additionalPage.anchorBottom || false);

      let pageContent;
      if (additionalPage.renderContent != null) {
        pageContent = additionalPage.renderContent();
      } else {
        pageContent = null;
      }

      ReactDOM.render(
        <React.Fragment>{pageContent}</React.Fragment>,
        layoutData.layout.element
      );

      let pageFooterContent;
      if (additionalPage.renderFooterContent != null) {
        pageFooterContent = additionalPage.renderFooterContent();
      } else {
        pageFooterContent = null;
      }

      ReactDOM.render(
        <React.Fragment>{pageFooterContent}</React.Fragment>,
        layoutData.layout.footerElement
      );
    });
  };

  render() {
    return <div ref={this._ref} />;
  }
}
