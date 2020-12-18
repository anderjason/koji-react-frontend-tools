import * as React from "react";
export interface IntegerInputProps {
    onChange: (value: number) => void;
    defaultValue?: number;
    placeholderLabel?: string;
    persistentLabel?: string;
    isInvalid?: boolean;
    onFocus?: () => void;
    onBlur?: () => void;
}
export declare class IntegerInput extends React.Component<IntegerInputProps, any> {
    private _ref;
    private _actor;
    private _isInvalid;
    componentDidUpdate(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
