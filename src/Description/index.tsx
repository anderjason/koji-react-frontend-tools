import * as React from "react";
import { Actor } from "skytree";
import { Description as DescriptionActor } from "@anderjason/koji-frontend-tools";
import { Observable } from "@anderjason/observable";

export interface DescriptionProps {
  text: string;
}

export class Description extends React.PureComponent<DescriptionProps, any> {
  private _ref = React.createRef<HTMLDivElement>();
  private _actor: Actor;
  private _text = Observable.ofEmpty<string>(Observable.isStrictEqual);

  componentDidUpdate() {
    this._text.setValue(this.props.text);
  }

  componentDidMount() {
    this._text.setValue(this.props.text);

    this._actor = new DescriptionActor({
      parentElement: this._ref.current,
      text: this._text,
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
    return <div ref={this._ref}></div>;
  }
}
