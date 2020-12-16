import * as React from "react";
import { CardMode } from "@anderjason/koji-frontend-tools/dist/Card";
export interface CardProps {
    children: any;
    maxHeight?: number;
    mode?: CardMode;
}
export declare class Card extends React.Component<any, any> {
    private _ref;
    private _actor;
    private _mode;
    componentDidUpdate(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
