import * as React from "react";
import { ValuePath } from "@anderjason/util";
export interface KojiState {
    isRemixing: boolean;
    vccData: any;
    update: (path: string | string[] | ValuePath, value: any) => void;
}
export interface KojiReactConfigProps {
    render: (kojiState: KojiState) => any;
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
    update: (path: string | string[] | ValuePath, value: any) => void;
    render(): any;
}
