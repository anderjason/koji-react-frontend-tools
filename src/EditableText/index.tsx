import { EditableText as EditableTextActor } from "@anderjason/koji-frontend-tools";
import { DisplayTextType } from "@anderjason/koji-frontend-tools/dist/DisplayText";
import { KojiTheme } from "@anderjason/koji-frontend-tools/dist/KojiAppearance";
import { Observable } from "@anderjason/observable";
import * as React from "react";
import { Actor } from "skytree";

export interface EditableTextProps {
  onChange: (value: string) => void;
  displayType: DisplayTextType;
  placeholderLabel: string;

  defaultValue?: string;
  theme?: KojiTheme;
}

export class EditableText extends React.Component<EditableTextProps, any> {
  private _ref = React.createRef<HTMLDivElement>();
  private _actor: Actor;
  private _theme = Observable.ofEmpty<KojiTheme>(Observable.isStrictEqual);

  componentDidUpdate() {
    this._theme.setValue(this.props.theme);
  }

  componentDidMount() {
    const value = Observable.givenValue(
      this.props.defaultValue,
      Observable.isStrictEqual
    );

    this._theme.setValue(this.props.theme);

    this._actor = new EditableTextActor({
      parentElement: this._ref.current,
      output: value,
      displayType: this.props.displayType,
      placeholderLabel: this.props.placeholderLabel,
      theme: this._theme,
    });
    this._actor.activate();

    this._actor.cancelOnDeactivate(
      value.didChange.subscribe(text => {
        try {
          if (this.props.onChange != null) {
            this.props.onChange(text);
          }
        } catch (err) {
          console.warn(err);
        }
      })
    );
  }

  componentWillUnmount() {
    if (this._actor != null) {
      this._actor.deactivate();
      this._actor = undefined;
    }
  }

  render() {
    return <div className="kft-text" ref={this._ref}></div>;
  }
}
