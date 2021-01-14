import * as React from "react";
import { SubmitButtonMode } from "@anderjason/koji-frontend-tools/dist/SubmitButton";
export interface SubmitButtonProps {
    text: string;
    mode: SubmitButtonMode;
    onClick: () => void;
}
export declare class SubmitButton extends React.PureComponent<SubmitButtonProps, any> {
    private _ref;
    private _actor;
    private _text;
    private _mode;
    componentDidUpdate(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
