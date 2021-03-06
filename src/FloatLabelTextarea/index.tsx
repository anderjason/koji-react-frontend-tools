import * as React from "react";
import { FloatLabelTextarea as FloatLabelTextareaActor } from "@anderjason/koji-frontend-tools";
import { Observable } from "@anderjason/observable";

export interface FloatLabelTextareaProps {
  onChange: (value: string) => void;

  defaultValue?: string;
  errorLabel?: string;
  maxLength?: number;
  maxRows?: number;
  minRows?: number;
  onBlur?: () => void;
  onFocus?: () => void;
  persistentLabel?: string;
  placeholderLabel?: string;
  supportLabel?: string;
}

export class FloatLabelTextarea extends React.Component<
  FloatLabelTextareaProps,
  any
> {
  private _ref = React.createRef<HTMLDivElement>();
  private _actor: FloatLabelTextareaActor<string>;
  private _errorLabel = Observable.ofEmpty<string>(Observable.isStrictEqual);
  private _maxLength = Observable.ofEmpty<number>(Observable.isStrictEqual);
  private _maxRows = Observable.ofEmpty<number>(Observable.isStrictEqual);
  private _minRows = Observable.ofEmpty<number>(Observable.isStrictEqual);
  private _persistentLabel = Observable.ofEmpty<string>(
    Observable.isStrictEqual
  );
  private _placeholderLabel = Observable.ofEmpty<string>(
    Observable.isStrictEqual
  );
  private _supportLabel = Observable.ofEmpty<string>(Observable.isStrictEqual);

  componentDidUpdate() {
    this._errorLabel.setValue(this.props.errorLabel);
    this._maxLength.setValue(this.props.maxLength);
    this._maxRows.setValue(this.props.maxRows);
    this._minRows.setValue(this.props.minRows);
    this._persistentLabel.setValue(this.props.persistentLabel);
    this._placeholderLabel.setValue(this.props.placeholderLabel);
    this._supportLabel.setValue(this.props.supportLabel);
  }

  componentDidMount() {
    this._maxLength.setValue(this.props.maxLength);
    this._errorLabel.setValue(this.props.errorLabel);
    this._maxRows.setValue(this.props.maxRows);
    this._minRows.setValue(this.props.minRows);
    this._persistentLabel.setValue(this.props.persistentLabel);
    this._placeholderLabel.setValue(this.props.placeholderLabel);
    this._supportLabel.setValue(this.props.supportLabel);

    const value = Observable.givenValue(
      this.props.defaultValue,
      Observable.isStrictEqual
    );

    this._actor = new FloatLabelTextareaActor<string>({
      displayTextGivenValue: (v) => v,
      errorLabel: this._errorLabel,
      maxLength: this._maxLength,
      maxRows: this._maxRows,
      minRows: this._minRows,
      parentElement: this._ref.current,
      persistentLabel: this._persistentLabel,
      placeholderLabel: this._placeholderLabel,
      supportLabel: this._supportLabel,
      value,
      valueGivenDisplayText: (v) => v,
    });

    this._actor.activate();

    this._actor.cancelOnDeactivate(
      this._actor.isFocused.didChange.subscribe((isFocused) => {
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
