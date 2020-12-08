import { DisplayTextType } from "@anderjason/koji-frontend-tools/dist/DisplayText";
import { KojiTheme } from "@anderjason/koji-frontend-tools/dist/KojiAppearance";
import * as React from "react";
export interface EditableTextProps {
    onChange: (value: string) => void;
    displayType: DisplayTextType;
    placeholderLabel: string;
    defaultValue?: string;
    theme?: KojiTheme;
}
export declare class EditableText extends React.Component<EditableTextProps, any> {
    private _ref;
    private _actor;
    private _theme;
    componentDidUpdate(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
