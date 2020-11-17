import { Color } from "@anderjason/color";
import * as React from "react";
import { LoadingIndicator } from "../../../src";
import { ReactDemoComponentProps } from "../_internal/ReactDemoContainer";

const white = Color.givenHexString("#FFF");

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
      <LoadingIndicator hexColor="#FFF" />
    );
  }
}
      `,
    });

    return <LoadingIndicator hexColor="#FFF" />;
  }
}
