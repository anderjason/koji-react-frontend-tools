import * as React from "react";
import { Actor } from "skytree";
import { LoadingIndicator as LoadingIndicatorActor } from "@anderjason/koji-frontend-tools";
import { Color } from "@anderjason/color";
import { Observable } from "@anderjason/observable";

export interface LoadingIndicatorProps {
  hexColor: string;
}

export class LoadingIndicator extends React.PureComponent<
  LoadingIndicatorProps,
  any
> {
  private _ref = React.createRef<HTMLDivElement>();
  private _actor: Actor;
  private _color = Observable.ofEmpty<Color>(Color.isEqual);
  private _hexColor = Observable.ofEmpty<string>(Observable.isStrictEqual);

  componentDidUpdate() {
    this._hexColor.setValue(this.props.hexColor);
  }

  componentDidMount() {
    this._hexColor.setValue(this.props.hexColor);

    const receipt = this._hexColor.didChange.subscribe((hexColor) => {
      if (hexColor == null) {
        return;
      }

      this._color.setValue(Color.givenHexString(hexColor));
    }, true);

    this._actor = new LoadingIndicatorActor({
      parentElement: this._ref.current,
      color: this._color,
    });
    this._actor.activate();

    this._actor.cancelOnDeactivate(receipt);
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
