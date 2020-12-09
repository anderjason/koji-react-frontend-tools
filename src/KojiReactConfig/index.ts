import * as React from "react";
import { Receipt } from "@anderjason/observable";
import { KojiTools } from "@anderjason/koji-frontend-tools";
import { ValuePath } from "@anderjason/util";
import { KojiMode } from "@anderjason/koji-frontend-tools/dist/KojiTools";

export interface KojiState {
  sessionMode: KojiMode;
  currentMode: KojiMode;
  vccData: any;
  update: (path: string | string[] | ValuePath, value: any) => void;
}

export interface KojiReactConfigProps {
  render: (kojiState: KojiState) => any;
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
    this._receipt = KojiTools.instance.vccData.state.didChange.subscribe(
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

  update = (path: string | string[] | ValuePath, value: any): void => {
    let valuePath: ValuePath;
    if (typeof path === "string") {
      valuePath = ValuePath.givenString(path);
    } else if (Array.isArray(path)) {
      valuePath = ValuePath.givenParts(path);
    } else {
      valuePath = path;
    }

    KojiTools.instance.vccData.update(valuePath, value);
  };

  render() {
    const output = this.props.render({
      sessionMode: KojiTools.instance.sessionMode.value,
      currentMode: KojiTools.instance.currentMode.value,
      vccData: this.state.vccData || {},
      update: this.update,
    });

    return output;
  }
}
