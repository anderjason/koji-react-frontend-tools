import * as React from "react";
import { Money } from "@anderjason/money";
export interface MoneyInputProps {
    onChange: (value: Money) => void;
    defaultValue?: Money;
    placeholderLabel?: string;
    persistentLabel?: string;
    maxValue?: Money;
    isInvalid?: boolean;
}
export declare class MoneyInput extends React.Component<MoneyInputProps, any> {
    private _ref;
    private _actor;
    private _isInvalid;
    componentDidUpdate(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
