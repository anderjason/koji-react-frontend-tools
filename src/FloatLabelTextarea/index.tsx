import * as React from "react";
import { Actor } from "skytree";
import { FloatLabelTextarea as FloatLabelTextareaActor } from "@anderjason/koji-frontend-tools";
import { Observable } from "@anderjason/observable";

export interface FloatLabelTextareaProps {
  onChange: (value: string) => void;

  defaultValue?: string;
  isInvalid?: boolean;
  maxLength?: number;
  persistentLabel?: string;
  placeholderLabel?: string;
}

export class FloatLabelTextarea extends React.Component<
  FloatLabelTextareaProps,
  any
> {
  private _ref = React.createRef<HTMLDivElement>();
  private _actor: Actor;
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

    this._actor = new FloatLabelTextareaActor<string>({
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
