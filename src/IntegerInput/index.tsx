import * as React from "react";
import { IntegerInput as IntegerInputActor } from "@anderjason/koji-frontend-tools";
import { Observable } from "@anderjason/observable";

export interface IntegerInputProps {
  onChange: (value: number) => void;

  defaultValue?: number;
  placeholderLabel?: string;
  persistentLabel?: string;
  errorLabel?: string;
  supportLabel?: string;
  onFocus?: () => void;
  onBlur?: () => void;
}

export class IntegerInput extends React.Component<IntegerInputProps, any> {
  private _ref = React.createRef<HTMLDivElement>();
  private _actor: IntegerInputActor;
  private _errorLabel = Observable.ofEmpty<string>(Observable.isStrictEqual);
  private _persistentLabel = Observable.ofEmpty<string>(
    Observable.isStrictEqual
  );
  private _placeholderLabel = Observable.ofEmpty<string>(
    Observable.isStrictEqual
  );
  private _supportLabel = Observable.ofEmpty<string>(Observable.isStrictEqual);

  componentDidUpdate() {
    this._errorLabel.setValue(this.props.errorLabel);
    this._persistentLabel.setValue(this.props.persistentLabel);
    this._placeholderLabel.setValue(this.props.placeholderLabel);
    this._supportLabel.setValue(this.props.supportLabel);
  }

  componentDidMount() {
    this._errorLabel.setValue(this.props.errorLabel);
    this._persistentLabel.setValue(this.props.persistentLabel);
    this._placeholderLabel.setValue(this.props.placeholderLabel);
    this._supportLabel.setValue(this.props.supportLabel);

    const value = Observable.givenValue(
      this.props.defaultValue,
      Observable.isStrictEqual
    );

    this._actor = new IntegerInputActor({
      errorLabel: this._errorLabel,
      parentElement: this._ref.current,
      persistentLabel: this._persistentLabel,
      placeholderLabel: this._placeholderLabel,
      supportLabel: this._supportLabel,
      value,
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
      value.didChange.subscribe((n) => {
        try {
          if (this.props.onChange != null) {
            this.props.onChange(n);
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
