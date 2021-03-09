import * as React from "react";
export interface VerticalExpanderProps {
    children: any;
    isExpanded: boolean;
}
export declare class VerticalExpander extends React.Component<VerticalExpanderProps, any> {
    private _ref;
    private _actor;
    private _isExpanded;
    componentDidUpdate(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    renderContent: () => void;
    render(): JSX.Element;
}
