import * as React from "react";
export interface ToggleButtonProps {
    defaultValue: boolean;
    onChange: (isActive: boolean) => void;
}
export declare class ToggleButton extends React.PureComponent<ToggleButtonProps, any> {
    private _ref;
    private _actor;
    private _isActive;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
