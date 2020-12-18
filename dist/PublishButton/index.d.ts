import * as React from "react";
import { PublishButtonMode } from "@anderjason/koji-frontend-tools/dist/PublishButton";
export interface PublishButtonProps {
    onClick: () => void;
    mode: PublishButtonMode;
}
export declare class PublishButton extends React.Component<PublishButtonProps, any> {
    private _ref;
    private _actor;
    private _mode;
    componentDidUpdate(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
