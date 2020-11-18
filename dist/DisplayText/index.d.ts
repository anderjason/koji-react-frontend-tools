import * as React from "react";
import { DisplayTextType } from "@anderjason/koji-frontend-tools/dist/DisplayText";
import { Color } from "@anderjason/color";
export interface DisplayTextProps {
    text: string;
    displayType: DisplayTextType;
    color?: Color;
}
export declare class DisplayText extends React.PureComponent<DisplayTextProps, any> {
    private _ref;
    private _actor;
    private _text;
    private _color;
    componentDidUpdate(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
