import * as React from "react";
import { Actor } from "skytree";
import { PublishButton as PublishButtonActor } from "@anderjason/koji-frontend-tools";
import { PublishButtonMode } from "@anderjason/koji-frontend-tools/dist/PublishButton";
import { Observable } from "@anderjason/observable";

export interface PublishButtonProps {
  onClick: () => void;
  mode: PublishButtonMode;
}

export class PublishButton extends React.Component<PublishButtonProps, any> {
  private _ref = React.createRef<HTMLDivElement>();
  private _actor: Actor;
  private _mode = Observable.ofEmpty<PublishButtonMode>(
    Observable.isStrictEqual
  );

  componentDidUpdate() {
    this._mode.setValue(this.props.mode);
  }

  componentDidMount() {
    this._mode.setValue(this.props.mode);

    this._actor = new PublishButtonActor({
      parentElement: this._ref.current,
      onClick: () => {
        this.props.onClick();
      },
      mode: this._mode
    });
    this._actor.activate();
  }

  componentWillUnmount() {
    if (this._actor != null) {
      this._actor.deactivate();
      this._actor = undefined;
    }
  }

  render() {
    return <div ref={this._ref} />;
  }
}
