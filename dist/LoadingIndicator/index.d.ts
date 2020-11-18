import * as React from "react";
import { Color } from "@anderjason/color";
export interface LoadingIndicatorProps {
    color: Color;
}
export declare class LoadingIndicator extends React.PureComponent<LoadingIndicatorProps, any> {
    private _ref;
    private _actor;
    private _color;
    componentDidUpdate(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
