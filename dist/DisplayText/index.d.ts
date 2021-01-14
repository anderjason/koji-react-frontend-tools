import * as React from "react";
import { DisplayTextType } from "@anderjason/koji-frontend-tools/dist/DisplayText";
export interface DisplayTextProps {
    text: string;
    displayType: DisplayTextType;
}
export declare class DisplayText extends React.PureComponent<DisplayTextProps, any> {
    private _ref;
    private _actor;
    private _text;
    componentDidUpdate(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
