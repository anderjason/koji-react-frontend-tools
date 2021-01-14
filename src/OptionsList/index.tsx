import * as React from "react";
import { Actor } from "skytree";
import { OptionsList as OptionsListActor } from "@anderjason/koji-frontend-tools";
import { ObservableArray } from "@anderjason/observable";
import { OptionsListItemData } from "@anderjason/koji-frontend-tools/dist/OptionsList";

export interface OptionsListProps {
  items: ObservableArray<OptionsListItemData>;
}

export class OptionsList extends React.PureComponent<OptionsListProps, any> {
  private _ref = React.createRef<HTMLDivElement>();
  private _actor: Actor;

  componentDidMount() {
    this._actor = new OptionsListActor({
      parentElement: this._ref.current,
      items: this.props.items || ObservableArray.ofEmpty<OptionsListItemData>()
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
