import * as React from "react";
import { Card as CardActor } from "@anderjason/koji-frontend-tools";
import ReactDOM = require("react-dom");
import { CardMode } from "@anderjason/koji-frontend-tools/dist/Card";
import { Observable } from "@anderjason/observable";
import { CardLayout } from "@anderjason/koji-frontend-tools/dist/Card/_internal/CardLayout";

export interface CardPage {
  content?: any;
  footerContent?: any;
  title?: string;
  anchorBottom?: boolean;
  onRemoved?: () => void;
}

export interface CardProps {
  additionalPages?: CardPage[];
  anchorBottom?: boolean;
  children?: any;
  footerContent?: any;
  hiddenContent?: any;
  maxHeight?: number;
  mode?: CardMode;
}

interface LayoutData {
  layout: CardLayout;
  title: Observable<string>;
  anchorBottom: Observable<boolean>;
}

export class Card extends React.Component<CardProps, any> {
  private _ref = React.createRef<HTMLDivElement>();
  private _actor: CardActor;
  private _layoutDatas: LayoutData[] = [];
  private _mode = Observable.ofEmpty<CardMode>(Observable.isStrictEqual);
  private _anchorBottom = Observable.ofEmpty<boolean>(Observable.isStrictEqual);

  componentDidUpdate() {
    this._mode.setValue(this.props.mode);
    this._anchorBottom.setValue(this.props.anchorBottom == null ? false : this.props.anchorBottom);

    this.renderPages();
  }

  componentDidMount() {
    this._mode.setValue(this.props.mode);
    this._anchorBottom.setValue(this.props.anchorBottom == null ? false : this.props.anchorBottom);

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
      })
    );

    ReactDOM.render(
      <React.Fragment>{this.props.children}</React.Fragment>,
      this._actor.baseElement
    );

    ReactDOM.render(
      <React.Fragment>{this.props.footerContent}</React.Fragment>,
      this._actor.baseFooterElement
    );

    ReactDOM.render(
      <React.Fragment>{this.props.hiddenContent}</React.Fragment>,
      this._actor.hiddenElement
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
          onRemoved: requestedPage.onRemoved
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

    ReactDOM.render(
      <React.Fragment>{this.props.children}</React.Fragment>,
      this._actor.baseElement
    );

    this._layoutDatas.forEach((layoutData, idx) => {
      const additionalPage = requestedPages[idx];

      layoutData.title.setValue(additionalPage.title);
      layoutData.anchorBottom.setValue(additionalPage.anchorBottom || false);

      ReactDOM.render(
        <React.Fragment>{additionalPage.content}</React.Fragment>,
        layoutData.layout.element
      );

      ReactDOM.render(
        <React.Fragment>{additionalPage.footerContent}</React.Fragment>,
        layoutData.layout.footerElement
      );
    });
  }

  render() {
    return <div ref={this._ref} />;
  }
}
