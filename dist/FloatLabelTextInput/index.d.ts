import * as React from "react";
export interface FloatLabelTextInputProps {
    onChange: (value: string) => void;
    defaultValue?: string;
    placeholderLabel?: string;
    persistentLabel?: string;
}
export declare class FloatLabelTextInput extends React.Component<FloatLabelTextInputProps, any> {
    private _ref;
    private _actor;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
