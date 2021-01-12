import * as React from "react";
export interface FloatLabelTextareaProps {
    onChange: (value: string) => void;
    defaultValue?: string;
    errorLabel?: string;
    maxLength?: number;
    maxRows?: number;
    minRows?: number;
    onBlur?: () => void;
    onFocus?: () => void;
    persistentLabel?: string;
    placeholderLabel?: string;
    supportLabel?: string;
}
export declare class FloatLabelTextarea extends React.Component<FloatLabelTextareaProps, any> {
    private _ref;
    private _actor;
    private _errorLabel;
    private _maxLength;
    private _maxRows;
    private _minRows;
    private _persistentLabel;
    private _placeholderLabel;
    private _supportLabel;
    componentDidUpdate(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
