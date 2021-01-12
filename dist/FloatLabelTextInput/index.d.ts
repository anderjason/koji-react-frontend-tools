import * as React from "react";
export interface FloatLabelTextInputProps {
    onChange: (value: string) => void;
    defaultValue?: string;
    errorLabel?: string;
    maxLength?: number;
    onBlur?: () => void;
    onFocus?: () => void;
    persistentLabel?: string;
    placeholderLabel?: string;
    supportLabel?: string;
}
export declare class FloatLabelTextInput extends React.Component<FloatLabelTextInputProps, any> {
    private _ref;
    private _actor;
    private _errorLabel;
    private _maxLength;
    private _persistentLabel;
    private _placeholderLabel;
    private _supportLabel;
    componentDidUpdate(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
