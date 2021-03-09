import * as React from "react";
import ReactDOM = require("react-dom");
import { VerticalExpander as VerticalExpanderActor } from "@anderjason/web";
import { Observable } from "@anderjason/observable";

export interface VerticalExpanderProps {
  children: any;
  isExpanded: boolean;
}

export class VerticalExpander extends React.Component<VerticalExpanderProps, any> {
  private _ref = React.createRef<HTMLDivElement>();
  private _actor: VerticalExpanderActor;
  private _isExpanded = Observable.ofEmpty<boolean>(Observable.isStrictEqual);

  componentDidUpdate() {
    this._isExpanded.setValue(this.props.isExpanded);

    this.renderContent();
  }

  componentDidMount() {
    this._isExpanded.setValue(this.props.isExpanded);
    
    this._actor = new VerticalExpanderActor({
      parentElement: this._ref.current,
      isExpanded: this._isExpanded
    });
    this._actor.activate();

    this.renderContent();
  }

  componentWillUnmount() {
    if (this._actor != null) {
      this._actor.deactivate();
      this._actor = undefined;
    }
  }

  renderContent = () => {
    ReactDOM.render(
      <React.Fragment>{this.props.children}</React.Fragment>,
      this._actor.element
    );
  };

  render() {
    return <div ref={this._ref} />;
  }
}
