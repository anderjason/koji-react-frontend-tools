import * as React from "react";
import { LoadingIndicator } from "../../../src";
import { ReactDemoComponentProps } from "../_internal/ReactDemoContainer";

export class LoadingIndicatorDemo extends React.Component<
  ReactDemoComponentProps,
  any
> {
  render() {
    // display example code in the sidebar
    this.props.demoActor.exampleCode.setValue({
      language: "jsx",
      code: `
class Demo extends React.Component { 
  render() {
    return (
      <LoadingIndicator color="#FFF" />
    );
  }
}
      `,
    });

    return <LoadingIndicator color="#FFF" />;
  }
}
