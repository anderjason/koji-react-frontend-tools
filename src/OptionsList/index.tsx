import * as React from "react";
import { Actor } from "skytree";
import { OptionsList as OptionsListActor } from "@anderjason/koji-frontend-tools";
import { Dict } from "@anderjason/observable";
import { OptionDefinition } from "@anderjason/koji-frontend-tools/dist/OptionsList";

export interface OptionsListProps {
  definitions: OptionDefinition[];
  onChange: (key: string, value: any) => void;
  
  defaultValues?: Dict<any>;
}

export class OptionsList extends React.PureComponent<OptionsListProps, any> {
  private _ref = React.createRef<HTMLDivElement>();
  private _actor: Actor;

  componentDidMount() {
    this._actor = new OptionsListActor({
      parentElement: this._ref.current,
      defaultValues: this.props.defaultValues,
      definitions: this.props.definitions,
      onChange: this.props.onChange
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
