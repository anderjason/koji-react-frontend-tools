import * as React from "react";
import { KojiTools } from "@anderjason/koji-frontend-tools";
import { ValuePath } from "@anderjason/util";
import { KojiMode } from "@anderjason/koji-frontend-tools/dist/KojiTools";
import { Actor } from "skytree";

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
  sessionMode: KojiMode;
  currentMode: KojiMode;
}

export class KojiReactConfig extends React.Component<
  KojiReactConfigProps,
  KojiReactConfigState
> {
  private _actor = new Actor({});

  state = {
    vccData: KojiTools.instance.vccData.state.value,
    sessionMode: KojiTools.instance.sessionMode.value,
    currentMode: KojiTools.instance.currentMode.value,
  };

  componentDidMount() {
    this._actor.activate();

    this._actor.cancelOnDeactivate(
      KojiTools.instance.vccData.state.didChange.subscribe((vccData) => {
        this.setState({
          vccData,
        });
      })
    );

    this._actor.cancelOnDeactivate(
      KojiTools.instance.currentMode.didChange.subscribe((currentMode) => {
        this.setState({
          currentMode,
        });
      })
    );

    this._actor.cancelOnDeactivate(
      KojiTools.instance.sessionMode.didChange.subscribe((sessionMode) => {
        this.setState({
          sessionMode,
        });
      })
    );
  }

  componentWillUnmount() {
    if (this._actor != null) {
      this._actor.deactivate();
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
    const { vccData = {}, currentMode, sessionMode } = this.state;

    const output = this.props.render({
      sessionMode,
      currentMode,
      vccData,
      update: this.update,
    });

    return output;
  }
}
