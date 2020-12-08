import * as React from "react";
import { Actor } from "skytree";
import { AlignBottom as AlignBottomActor } from "@anderjason/koji-frontend-tools";
import { Observable } from "@anderjason/observable";

export interface AlignBottomProps {
  isRemixing: boolean;
}

export class AlignBottom extends React.Component<AlignBottomProps, any> {
  private _ref = React.createRef<HTMLDivElement>();
  private _actor: Actor;
  private _isRemixing = Observable.ofEmpty<boolean>(Observable.isStrictEqual);

  componentDidUpdate() {
    this._isRemixing.setValue(this.props.isRemixing || false);
  }

  componentDidMount() {
    this._isRemixing.setValue(this.props.isRemixing || false);

    this._actor = new AlignBottomActor({
      target: {
        type: "thisElement",
        element: this._ref.current,
      },
      isRemixing: this._isRemixing,
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
    return <div ref={this._ref}>{this.props.children}</div>;
  }
}
