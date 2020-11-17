import * as React from "react";
import { ValuePath } from "@anderjason/util";
export interface KojiReactConfigRenderParams {
    isRemixing: boolean;
    vccData: any;
    update: (path: string[], value: any) => void;
}
export interface KojiReactConfigProps {
    render: (renderParams: KojiReactConfigRenderParams) => any;
}
export interface KojiReactConfigState {
    vccData: any;
}
export declare class KojiReactConfig extends React.Component<KojiReactConfigProps, KojiReactConfigState> {
    private _receipt;
    state: {
        vccData: any;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    update: (path: ValuePath | string[], value: any) => void;
    render(): any;
}
