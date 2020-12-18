import * as React from "react";
import { Actor } from "skytree";
import { AlignBottom as AlignBottomActor } from "@anderjason/koji-frontend-tools";
import { Observable } from "@anderjason/observable";
import { BooleanUtil } from "@anderjason/util/dist/BooleanUtil";
import ReactDOM = require("react-dom");

export interface AlignBottomProps {
  isRemixing: boolean;
}

export class AlignBottom extends React.Component<AlignBottomProps, any> {
  private _ref = React.createRef<HTMLDivElement>();
  private _actor: AlignBottomActor;
  private _isRemixing = Observable.ofEmpty<boolean>(Observable.isStrictEqual);

  componentDidUpdate() {
    this._isRemixing.setValue(BooleanUtil.booleanGivenBooleanLike(this.props.isRemixing || false));

    ReactDOM.render(
      <React.Fragment>{this.props.children}</React.Fragment>,
      this._actor.element
    );
  }

  componentDidMount() {
    this._isRemixing.setValue(BooleanUtil.booleanGivenBooleanLike(this.props.isRemixing || false));

    this._actor = new AlignBottomActor({
      target: {
        type: "thisElement",
        element: this._ref.current,
      },
      isRemixing: this._isRemixing,
    });
    this._actor.activate();

    ReactDOM.render(
      <React.Fragment>{this.props.children}</React.Fragment>,
      this._actor.element
    );
  }

  componentWillUnmount() {
    if (this._actor != null) {
      this._actor.deactivate();
      this._actor = undefined;
    }
  }

  render() {
    return <div className="alignbottom" ref={this._ref} />;
  }
}
