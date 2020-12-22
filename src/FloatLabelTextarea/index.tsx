import * as React from "react";
import { FloatLabelTextarea as FloatLabelTextareaActor } from "@anderjason/koji-frontend-tools";
import { Observable } from "@anderjason/observable";

export interface FloatLabelTextareaProps {
  onChange: (value: string) => void;

  defaultValue?: string;
  isInvalid?: boolean;
  maxLength?: number;
  maxRows?: number;
  minRows?: number;
  onBlur?: () => void;
  onFocus?: () => void;
  persistentLabel?: string;
  placeholderLabel?: string;
}

export class FloatLabelTextarea extends React.Component<
  FloatLabelTextareaProps,
  any
> {
  private _ref = React.createRef<HTMLDivElement>();
  private _actor: FloatLabelTextareaActor<string>;
  private _isInvalid = Observable.ofEmpty<boolean>(Observable.isStrictEqual);
  private _maxLength = Observable.ofEmpty<number>(Observable.isStrictEqual);
  private _maxRows = Observable.ofEmpty<number>(Observable.isStrictEqual);
  private _minRows = Observable.ofEmpty<number>(Observable.isStrictEqual);

  componentDidUpdate() {
    this._isInvalid.setValue(this.props.isInvalid || false);
    this._maxLength.setValue(this.props.maxLength);
    this._maxRows.setValue(this.props.maxRows);
    this._minRows.setValue(this.props.minRows);
  }

  componentDidMount() {
    this._isInvalid.setValue(this.props.isInvalid || false);
    this._maxLength.setValue(this.props.maxLength);
    this._maxRows.setValue(this.props.maxRows);
    this._minRows.setValue(this.props.minRows);

    const value = Observable.givenValue(
      this.props.defaultValue,
      Observable.isStrictEqual
    );

    this._actor = new FloatLabelTextareaActor<string>({
      displayTextGivenValue: (v) => v,
      isInvalid: this._isInvalid,
      maxLength: this._maxLength,
      maxRows: this._maxRows,
      minRows: this._minRows,
      parentElement: this._ref.current,
      persistentLabel: this.props.persistentLabel,
      placeholder: this.props.placeholderLabel,
      value,
      valueGivenDisplayText: (v) => v,
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
