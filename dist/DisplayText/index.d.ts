import * as React from "react";
import { DisplayTextType } from "@anderjason/koji-frontend-tools/dist/DisplayText";
import { KojiTheme } from "@anderjason/koji-frontend-tools/dist/KojiAppearance";
export interface DisplayTextProps {
    text: string;
    displayType: DisplayTextType;
    theme?: KojiTheme;
}
export declare class DisplayText extends React.PureComponent<DisplayTextProps, any> {
    private _ref;
    private _actor;
    private _text;
    private _theme;
    componentDidUpdate(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
