import * as React from "react";
import { Dict } from "@anderjason/observable";
import { OptionDefinition } from "@anderjason/koji-frontend-tools/dist/OptionsList";
export interface OptionsListProps {
    definitions: OptionDefinition[];
    onChange: (key: string, value: any) => void;
    defaultValues?: Dict<any>;
}
export declare class OptionsList extends React.PureComponent<OptionsListProps, any> {
    private _ref;
    private _actor;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
