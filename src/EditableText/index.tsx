import * as React from "react";
import { EditableText as EditableTextActor } from "@anderjason/koji-frontend-tools";
import { DisplayTextType } from "@anderjason/koji-frontend-tools/dist/DisplayText";
import { Observable } from "@anderjason/observable";

export interface EditableTextProps {
  onChange: (value: string) => void;
  displayType: DisplayTextType;
  placeholderLabel: string;

  defaultValue?: string;
  maxLength?: number;
  isInvalid?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
}

export class EditableText extends React.Component<EditableTextProps, any> {
  private _ref = React.createRef<HTMLDivElement>();
  private _actor: EditableTextActor;
  private _maxLength = Observable.ofEmpty<number>(Observable.isStrictEqual);
  private _isInvalid = Observable.ofEmpty<boolean>(Observable.isStrictEqual);

  componentDidUpdate() {
    this._maxLength.setValue(this.props.maxLength);
    this._isInvalid.setValue(this.props.isInvalid);
  }

  componentDidMount() {
    this._maxLength.setValue(this.props.maxLength);
    this._isInvalid.setValue(this.props.isInvalid);

    const value = Observable.givenValue(
      this.props.defaultValue,
      Observable.isStrictEqual
    );

    this._actor = new EditableTextActor({
      parentElement: this._ref.current,
      output: value,
      displayType: this.props.displayType,
      placeholderLabel: this.props.placeholderLabel,
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
