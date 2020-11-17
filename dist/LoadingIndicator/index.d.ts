import * as React from "react";
export interface LoadingIndicatorProps {
    hexColor: string;
}
export declare class LoadingIndicator extends React.PureComponent<LoadingIndicatorProps, any> {
    private _ref;
    private _actor;
    private _color;
    private _hexColor;
    componentDidUpdate(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
