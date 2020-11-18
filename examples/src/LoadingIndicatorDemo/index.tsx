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
import { Color } from "@anderjason/color";

const white = Color.givenHexColor("#FFF");

class Demo extends React.Component { 
  render() {
    return (
      <LoadingIndicator color={white} />
    );
  }
}
      `,
    });

    return <LoadingIndicator color={white} />;
  }
}
