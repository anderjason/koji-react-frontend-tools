import * as React from "react";
export interface FloatLabelTextareaProps {
    onChange: (value: string) => void;
    defaultValue?: string;
    placeholderLabel?: string;
    persistentLabel?: string;
    maxLength?: number;
    isInvalid?: boolean;
}
export declare class FloatLabelTextarea extends React.Component<FloatLabelTextareaProps, any> {
    private _ref;
    private _actor;
    private _isInvalid;
    componentDidUpdate(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
