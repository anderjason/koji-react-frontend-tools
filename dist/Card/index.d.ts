import * as React from "react";
import { CardMode } from "@anderjason/koji-frontend-tools/dist/Card";
export interface CardPage {
    anchorBottom?: boolean;
    onRemoved?: () => void;
    renderContent?: () => any;
    renderFooterContent?: () => any;
    title?: string;
}
export interface CardProps {
    additionalPages?: CardPage[];
    anchorBottom?: boolean;
    maxHeight?: number;
    mode?: CardMode;
    renderContent?: () => any;
    renderFooterContent?: () => any;
    renderHiddenContent?: () => any;
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
