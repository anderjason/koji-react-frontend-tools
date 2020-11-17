import * as React from "react";
import { Receipt } from "@anderjason/observable";
import { Koji } from "@anderjason/koji-frontend-tools";
import { ValuePath } from "@anderjason/util";

export interface KojiReactConfigRenderParams {
  vccData: any;
  update: (path: string[], value: any) => void;
}

export interface KojiReactConfigProps {
  render: (renderParams: KojiReactConfigRenderParams) => any;
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

  update = (path: ValuePath | string[], value: any): void => {
    let valuePath: ValuePath;
    if (Array.isArray(path)) {
      valuePath = ValuePath.givenParts(path);
    } else {
      valuePath = path;
    }

    Koji.instance.vccData.update(valuePath, value);
  };

  render() {
    const output = this.props.render({
      vccData: this.state.vccData,
      update: this.update,
    });

    return output;
  }
}
