import * as React from "react";
import { Receipt } from "@anderjason/observable";
import { Koji } from "@anderjason/koji-frontend-tools";

export interface KojiReactConfigProps {
  render: (vccData: any) => any;
}

export interface KojiReactConfigState {
  vccData: any;
}

export class KojiReactConfig extends React.Component<
  KojiReactConfigProps,
  KojiReactConfigState
> {
  private _receipt: Receipt;

  state = {
    vccData: undefined,
  };

  componentDidMount() {
    this._receipt = Koji.instance.vccData.state.didChange.subscribe(
      (vccData) => {
        this.setState({
          vccData,
        });
      },
      true
    );
  }

  componentWillUnmount() {
    if (this._receipt != null) {
      this._receipt.cancel();
      this._receipt = undefined;
    }
  }

  render() {
    const { vccData } = this.state;

    const output = this.props.render(vccData);

    return output;
  }
}
