import * as React from "react";
export interface SubmitButtonProps {
    text: string;
    onClick: () => void;
}
export declare class SubmitButton extends React.PureComponent<SubmitButtonProps, any> {
    private _ref;
    private _actor;
    private _text;
    componentDidUpdate(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
