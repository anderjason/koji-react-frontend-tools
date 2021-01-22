import * as React from "react";
import { Actor } from "skytree";
import { LoadingIndicator as LoadingIndicatorActor } from "@anderjason/koji-frontend-tools";
import { Color } from "@anderjason/color";
import { Observable } from "@anderjason/observable";

export interface LoadingIndicatorProps {
  color?: string | Color;
}

export class LoadingIndicator extends React.PureComponent<
  LoadingIndicatorProps,
  any
> {
  private _ref = React.createRef<HTMLDivElement>();
  private _actor: Actor;
  private _color = Observable.ofEmpty<Color>(Color.isEqual);

  componentDidUpdate() {
    let color: Color;
    if (typeof this.props.color === "string") {
      color = Color.givenHexString(this.props.color);
    } else {
      color = this.props.color || Color.givenHexString("#000");
    }

    this._color.setValue(color);
  }

  componentDidMount() {
    let color: Color;
    if (typeof this.props.color === "string") {
      color = Color.givenHexString(this.props.color);
    } else {
      color = this.props.color || Color.givenHexString("#000");
    }

    this._color.setValue(color);

    this._actor = new LoadingIndicatorActor({
      parentElement: this._ref.current,
      color: this._color,
    });
    this._actor.activate();
  }

  componentWillUnmount() {
    if (this._actor != null) {
      this._actor.deactivate();
      this._actor = undefined;
    }
  }

  render() {
    return <div ref={this._ref}></div>;
  }
}
