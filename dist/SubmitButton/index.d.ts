import * as React from "react";
import { SubmitButtonMode } from "@anderjason/koji-frontend-tools/dist/SubmitButton";
import { KojiTheme } from "@anderjason/koji-frontend-tools/dist/KojiAppearance";
export interface SubmitButtonProps {
    text: string;
    mode: SubmitButtonMode;
    onClick: () => void;
    theme?: KojiTheme;
}
export declare class SubmitButton extends React.PureComponent<SubmitButtonProps, any> {
    private _ref;
    private _actor;
    private _text;
    private _theme;
    private _mode;
    componentDidUpdate(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
