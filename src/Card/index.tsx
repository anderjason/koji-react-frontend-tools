import * as React from "react";
import { Card as CardActor } from "@anderjason/koji-frontend-tools";
import ReactDOM = require("react-dom");
import { CardMode } from "@anderjason/koji-frontend-tools/dist/Card";
import { Observable } from "@anderjason/observable";

export interface CardProps {
  children: any;

  maxHeight?: number;
  mode?: CardMode;
}

export class Card extends React.Component<any, any> {
  private _ref = React.createRef<HTMLDivElement>();
  private _actor: CardActor;
  private _mode = Observable.ofEmpty<CardMode>(Observable.isStrictEqual);

  componentDidUpdate() {
    this._mode.setValue(this.props.mode);

    ReactDOM.render(
      <React.Fragment>{this.props.children}</React.Fragment>,
      this._actor.baseElement
    );
  }

  componentDidMount() {
    this._mode.setValue(this.props.mode);

    this._actor = new CardActor({
      target: {
        type: "thisElement",
        element: this._ref.current,
      },
      maxHeight: this.props.maxHeight,
      mode: this._mode
    });
    this._actor.activate();

    ReactDOM.render(
      <React.Fragment>{this.props.children}</React.Fragment>,
      this._actor.baseElement
    );
  }

  componentWillUnmount() {
    if (this._actor != null) {
      this._actor.deactivate();
      this._actor = undefined;
    }
  }

  render() {
    return <div ref={this._ref} />;
  }
}
