import * as React from "react";
import { ObservableArray } from "@anderjason/observable";
import { OptionsListItemData } from "@anderjason/koji-frontend-tools/dist/OptionsList";
export interface OptionsListProps {
    items: ObservableArray<OptionsListItemData>;
}
export declare class OptionsList extends React.PureComponent<OptionsListProps, any> {
    private _ref;
    private _actor;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
