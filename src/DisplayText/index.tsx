import * as React from "react";
import { Actor } from "skytree";
import { DisplayText as DisplayTextActor } from "@anderjason/koji-frontend-tools";
import { Observable } from "@anderjason/observable";
import { DisplayTextType } from "@anderjason/koji-frontend-tools/dist/DisplayText";
import { Color } from "@anderjason/color";

export interface DisplayTextProps {
  text: string;
  displayType: DisplayTextType;

  color?: Color;
}

export class DisplayText extends React.PureComponent<DisplayTextProps, any> {
  private _ref = React.createRef<HTMLDivElement>();
  private _actor: Actor;
  private _text = Observable.ofEmpty<string>(Observable.isStrictEqual);
  private _color = Observable.ofEmpty<Color>(Color.isEqual);

  componentDidUpdate() {
    this._text.setValue(this.props.text);
    this._color.setValue(this.props.color);
  }

  componentDidMount() {
    this._text.setValue(this.props.text);
    this._color.setValue(this.props.color);

    this._actor = new DisplayTextActor({
      parentElement: this._ref.current,
      text: this._text,
      displayType: this.props.displayType,
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
