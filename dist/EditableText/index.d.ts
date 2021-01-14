import { DisplayTextType } from "@anderjason/koji-frontend-tools/dist/DisplayText";
import * as React from "react";
export interface EditableTextProps {
    onChange: (value: string) => void;
    displayType: DisplayTextType;
    placeholderLabel: string;
    defaultValue?: string;
    maxLength?: number;
    isInvalid?: boolean;
    onFocus?: () => void;
    onBlur?: () => void;
}
export declare class EditableText extends React.Component<EditableTextProps, any> {
    private _ref;
    private _actor;
    private _maxLength;
    private _isInvalid;
    componentDidUpdate(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
