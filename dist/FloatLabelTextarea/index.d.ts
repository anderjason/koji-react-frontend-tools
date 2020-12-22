import * as React from "react";
export interface FloatLabelTextareaProps {
    onChange: (value: string) => void;
    defaultValue?: string;
    isInvalid?: boolean;
    maxLength?: number;
    maxRows?: number;
    minRows?: number;
    onBlur?: () => void;
    onFocus?: () => void;
    persistentLabel?: string;
    placeholderLabel?: string;
}
export declare class FloatLabelTextarea extends React.Component<FloatLabelTextareaProps, any> {
    private _ref;
    private _actor;
    private _isInvalid;
    private _maxLength;
    private _maxRows;
    private _minRows;
    componentDidUpdate(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
