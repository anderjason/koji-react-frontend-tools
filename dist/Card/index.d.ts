import * as React from "react";
import { CardMode } from "@anderjason/koji-frontend-tools/dist/Card";
export interface CardPage {
    content?: any;
    footerContent?: any;
    title?: string;
    anchorBottom?: boolean;
    onRemoved?: () => void;
}
export interface CardProps {
    additionalPages?: CardPage[];
    anchorBottom?: boolean;
    children?: any;
    footerContent?: any;
    hiddenContent?: any;
    maxHeight?: number;
    mode?: CardMode;
}
export declare class Card extends React.Component<CardProps, any> {
    private _ref;
    private _actor;
    private _layoutDatas;
    private _mode;
    private _anchorBottom;
    componentDidUpdate(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    renderPages: () => void;
    render(): JSX.Element;
}
