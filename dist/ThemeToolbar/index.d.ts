import * as React from "react";
import { KojiTheme } from "@anderjason/koji-frontend-tools/dist/KojiAppearance";
export interface ThemeToolbarProps {
    defaultValue: KojiTheme;
    onChange: (value: KojiTheme) => void;
}
export declare class ThemeToolbar extends React.PureComponent<ThemeToolbarProps, any> {
    private _ref;
    private _actor;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
