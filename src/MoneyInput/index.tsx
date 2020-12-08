import * as React from "react";
import { Actor } from "skytree";
import { MoneyInput as MoneyInputActor } from "@anderjason/koji-frontend-tools";
import { Observable } from "@anderjason/observable";
import { Money } from "@anderjason/money";

export interface MoneyInputProps {
  onChange: (value: Money) => void;

  defaultValue?: Money;
  placeholderLabel?: string;
  persistentLabel?: string;
  maxValue?: Money;
}

export class MoneyInput extends React.Component<MoneyInputProps, any> {
  private _ref = React.createRef<HTMLDivElement>();
  private _actor: Actor;

  componentDidMount() {
    const value = Observable.givenValue<Money>(
      this.props.defaultValue,
      Money.isEqual
    );

    this._actor = new MoneyInputActor({
      parentElement: this._ref.current,
      value,
      persistentLabel: this.props.persistentLabel,
      maxValue: this.props.maxValue,
    });

    this._actor.activate();

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
