import * as React from "react";
import { Card as CardActor } from "@anderjason/koji-frontend-tools";
import ReactDOM = require("react-dom");

export interface CardProps {
  children: any;
}

export class Card extends React.Component<any, any> {
  private _ref = React.createRef<HTMLDivElement>();
  private _actor: CardActor;

  componentDidUpdate() {
    ReactDOM.render(
      <React.Fragment>{this.props.children}</React.Fragment>,
      this._actor.baseElement
    );
  }

  componentDidMount() {
    this._actor = new CardActor({
      target: {
        type: "thisElement",
        element: this._ref.current,
      },
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
