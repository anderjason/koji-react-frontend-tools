import * as React from "react";
export interface FloatLabelTextInputProps {
    onChange: (value: string) => void;
    defaultValue?: string;
    placeholderLabel?: string;
    persistentLabel?: string;
    maxLength?: number;
    isInvalid?: boolean;
}
export declare class FloatLabelTextInput extends React.Component<FloatLabelTextInputProps, any> {
    private _ref;
    private _actor;
    private _isInvalid;
    private _maxLength;
    componentDidUpdate(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
