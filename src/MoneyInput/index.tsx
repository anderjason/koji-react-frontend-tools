import * as React from "react";
import { MoneyInput as MoneyInputActor } from "@anderjason/koji-frontend-tools";
import { Observable } from "@anderjason/observable";
import { Money } from "@anderjason/money";

export interface MoneyInputProps {
  onChange: (value: Money) => void;

  allowEmpty?: boolean;
  defaultValue?: Money;
  errorLabel?: string;
  maxValue?: Money;
  onBlur?: () => void;
  onFocus?: () => void;
  persistentLabel?: string;
  placeholderLabel?: string;
  supportLabel?: string;
}

export class MoneyInput extends React.Component<MoneyInputProps, any> {
  private _ref = React.createRef<HTMLDivElement>();
  private _actor: MoneyInputActor;
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

    const value = Observable.givenValue<Money>(
      this.props.defaultValue,
      Money.isEqual
    );

    this._actor = new MoneyInputActor({
      allowEmpty: this.props.allowEmpty || false,
      errorLabel: this._errorLabel,
      maxValue: this.props.maxValue,
      parentElement: this._ref.current,
      persistentLabel: this._persistentLabel,
      placeholderLabel: this._placeholderLabel,
      supportLabel: this._supportLabel,
      value,
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
      value.didChange.subscribe((money) => {
        try {
          if (this.props.onChange != null) {
            this.props.onChange(money);
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
