import * as React from "react";
export interface KojiReactConfigProps {
    render: (vccData: any) => any;
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
    render(): any;
}
