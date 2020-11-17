import * as React from "react";
import { Actor } from "skytree";
import { ThemeToolbar as ThemeToolbarActor } from "@anderjason/koji-frontend-tools";
import { Observable } from "@anderjason/observable";
import { KojiTheme } from "@anderjason/koji-frontend-tools/dist/KojiAppearance";

export interface ThemeToolbarProps {
  defaultValue: KojiTheme;
  onChange: (value: KojiTheme) => void;
}

export class ThemeToolbar extends React.PureComponent<ThemeToolbarProps, any> {
  private _ref = React.createRef<HTMLDivElement>();
  private _actor: Actor;

  componentDidMount() {
    const output = Observable.givenValue(
      this.props.defaultValue,
      Observable.isStrictEqual
    );

    this._actor = new ThemeToolbarActor({
      parentElement: this._ref.current,
      output,
    });
    this._actor.activate();

    this._actor.cancelOnDeactivate(
      output.didChange.subscribe((value) => {
        if (this.props.onChange != null) {
          this.props.onChange(value);
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
    return <div ref={this._ref}></div>;
  }
}
