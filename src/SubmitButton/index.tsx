import * as React from "react";
import { Actor } from "skytree";
import { SubmitButton as SubmitButtonActor } from "@anderjason/koji-frontend-tools";
import { Observable } from "@anderjason/observable";
import { SubmitButtonMode } from "@anderjason/koji-frontend-tools/dist/SubmitButton";
import { KojiTheme } from "@anderjason/koji-frontend-tools/dist/KojiAppearance";

export interface SubmitButtonProps {
  text: string;
  mode: SubmitButtonMode;
  onClick: () => void;
  theme?: KojiTheme;
}

export class SubmitButton extends React.PureComponent<SubmitButtonProps, any> {
  private _ref = React.createRef<HTMLButtonElement>();
  private _actor: Actor;
  private _text = Observable.ofEmpty<string>(Observable.isStrictEqual);
  private _theme = Observable.ofEmpty<KojiTheme>(Observable.isStrictEqual);
  private _mode = Observable.ofEmpty<SubmitButtonMode>(
    Observable.isStrictEqual
  );

  componentDidUpdate() {
    this._text.setValue(this.props.text);
    this._theme.setValue(this.props.theme);
    this._mode.setValue(this.props.mode);
  }

  componentDidMount() {
    this._text.setValue(this.props.text);
    this._theme.setValue(this.props.theme);
    this._mode.setValue(this.props.mode);

    this._actor = new SubmitButtonActor({
      target: {
        type: "thisElement",
        element: this._ref.current,
      },
      buttonMode: this._mode,
      onClick: () => {
        this.props.onClick();
      },
      text: this._text,
      theme: this._theme,
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
