import * as React from "react";
import { Actor } from "skytree";
import { ToggleButton as ToggleButtonActor } from "@anderjason/koji-frontend-tools";
import { Observable } from "@anderjason/observable";

export interface ToggleButtonProps {
  defaultValue: boolean;
  onChange: (isActive: boolean) => void;
}

export class ToggleButton extends React.PureComponent<ToggleButtonProps, any> {
  private _ref = React.createRef<HTMLButtonElement>();
  private _actor: Actor;
  private _isActive = Observable.ofEmpty<boolean>(Observable.isStrictEqual);

  componentDidMount() {
    this._isActive.setValue(this.props.defaultValue);
    
    this._actor = new ToggleButtonActor({
      target: {
        type: "thisElement",
        element: this._ref.current,
      },
      isActive: this._isActive,
    });
    this._actor.activate();

    this._actor.cancelOnDeactivate(
      this._actor.isActive.didChange.subscribe(isActive => {
        this.props.onChange(isActive);
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
    return <button ref={this._ref} />;
  }
}
