import * as React from "react";
import { Actor } from "skytree";
import {
  KojiAppearance,
  SubmitButton as SubmitButtonActor,
} from "@anderjason/koji-frontend-tools";
import { Observable } from "@anderjason/observable";

export interface SubmitButtonProps {
  text: string;
  onClick: () => void;
}

export class SubmitButton extends React.PureComponent<SubmitButtonProps, any> {
  private _ref = React.createRef<HTMLButtonElement>();
  private _actor: Actor;
  private _text = Observable.ofEmpty<string>(Observable.isStrictEqual);

  componentDidUpdate() {
    this._text.setValue(this.props.text);
  }

  componentDidMount() {
    this._text.setValue(this.props.text);

    this._actor = new SubmitButtonActor({
      target: {
        type: "thisElement",
        element: this._ref.current,
      },
      buttonMode: "ready",
      onClick: () => {
        this.props.onClick();
      },
      text: this._text,
      theme: KojiAppearance.themes.get("kojiBlack"),
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
    return <button className="kft-control" ref={this._ref} />;
  }
}
