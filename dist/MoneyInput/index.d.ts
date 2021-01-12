import * as React from "react";
import { Money } from "@anderjason/money";
export interface MoneyInputProps {
    onChange: (value: Money) => void;
    allowEmpty?: boolean;
    defaultValue?: Money;
    errorLabel?: string;
    maxValue?: Money;
    onBlur?: () => void;
    onFocus?: () => void;
    persistentLabel?: string;
    placeholderLabel?: string;
    supportLabel?: string;
}
export declare class MoneyInput extends React.Component<MoneyInputProps, any> {
    private _ref;
    private _actor;
    private _errorLabel;
    private _persistentLabel;
    private _placeholderLabel;
    private _supportLabel;
    componentDidUpdate(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
