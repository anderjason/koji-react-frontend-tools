import * as React from "react";
import { Actor } from "skytree";
import { FloatLabelTextInput as FloatLabelTextInputActor } from "@anderjason/koji-frontend-tools";
import { Observable } from "@anderjason/observable";

export interface FloatLabelTextInputProps {
  onChange: (value: string) => void;

  defaultValue?: string;
  placeholderLabel?: string;
  persistentLabel?: string;
  maxLength?: number;
  isInvalid?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
}

export class FloatLabelTextInput extends React.Component<
  FloatLabelTextInputProps,
  any
> {
  private _ref = React.createRef<HTMLDivElement>();
  private _actor: FloatLabelTextInputActor<string>;
  private _isInvalid = Observable.ofEmpty<boolean>(Observable.isStrictEqual);
  private _maxLength = Observable.ofEmpty<number>(Observable.isStrictEqual);

  componentDidUpdate() {
    this._isInvalid.setValue(this.props.isInvalid || false);
    this._maxLength.setValue(this.props.maxLength);
  }

  componentDidMount() {
    this._isInvalid.setValue(this.props.isInvalid || false);
    this._maxLength.setValue(this.props.maxLength);

    const value = Observable.givenValue(
      this.props.defaultValue,
      Observable.isStrictEqual
    );

    this._actor = new FloatLabelTextInputActor<string>({
      parentElement: this._ref.current,
      value,
      displayTextGivenValue: (v) => v,
      valueGivenDisplayText: (v) => v,
      placeholder: this.props.placeholderLabel,
      persistentLabel: this.props.persistentLabel,
      maxLength: this._maxLength,
      isInvalid: this._isInvalid
    });

    this._actor.activate();

    this._actor.cancelOnDeactivate(
      this._actor.isFocused.didChange.subscribe(isFocused => {
        if (isFocused == true) {
          if (this.props.onFocus != null) {
            this.props.onFocus();
          }
        } else if (isFocused == false) {
          if (this.props.onBlur != null) {
            this.props.onBlur();
          }
        }
      })
    );

    this._actor.cancelOnDeactivate(
      value.didChange.subscribe((text) => {
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
    return <div className="kft-control" ref={this._ref}></div>;
  }
}
