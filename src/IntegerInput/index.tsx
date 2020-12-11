import * as React from "react";
import { Actor } from "skytree";
import { IntegerInput as IntegerInputActor } from "@anderjason/koji-frontend-tools";
import { Observable } from "@anderjason/observable";

export interface IntegerInputProps {
  onChange: (value: number) => void;

  defaultValue?: number;
  placeholderLabel?: string;
  persistentLabel?: string;
  isInvalid?: boolean;
}

export class IntegerInput extends React.Component<IntegerInputProps, any> {
  private _ref = React.createRef<HTMLDivElement>();
  private _actor: Actor;
  private _isInvalid = Observable.ofEmpty<boolean>(Observable.isStrictEqual);

  componentDidUpdate() {
    this._isInvalid.setValue(this.props.isInvalid || false);
  }

  componentDidMount() {
    this._isInvalid.setValue(this.props.isInvalid || false);

    const value = Observable.givenValue(
      this.props.defaultValue,
      Observable.isStrictEqual
    );

    this._actor = new IntegerInputActor({
      parentElement: this._ref.current,
      value,
      placeholder: this.props.placeholderLabel,
      persistentLabel: this.props.persistentLabel,
      isInvalid: this._isInvalid
    });

    this._actor.activate();

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
