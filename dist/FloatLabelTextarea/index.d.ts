import * as React from "react";
export interface FloatLabelTextareaProps {
    onChange: (value: string) => void;
    defaultValue?: string;
    isInvalid?: boolean;
    maxLength?: number;
    persistentLabel?: string;
    placeholderLabel?: string;
    onFocus?: () => void;
    onBlur?: () => void;
}
export declare class FloatLabelTextarea extends React.Component<FloatLabelTextareaProps, any> {
    private _ref;
    private _actor;
    private _isInvalid;
    private _maxLength;
    componentDidUpdate(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
