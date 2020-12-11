import * as React from "react";
import {
  AlignBottom,
  Card,
  DisplayText,
  SubmitButton,
} from "../../../src";
import { ReactDemoComponentProps } from "../_internal/ReactDemoContainer";

const demoText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

export class DisplayTextDemo extends React.Component<
  ReactDemoComponentProps,
  any
> {
  render() {
    // display example code in the sidebar
    this.props.demoActor.exampleCode.setValue({
      language: "jsx",
      code: `
// const demoText = "Lorem ipsum dolor sit...

class Demo extends React.Component {
  render() {
    return (
      <AlignBottom isRemixing={false}>
        <Card>
          <DisplayText
            displayType="title"
            text="Something is for sale"
          />
          <DisplayText
            displayType="description"
            text={demoText}
          />
          <SubmitButton
            text="Action"
            mode="ready"
            onClick={() => {}}
          />
        </Card>
      </AlignBottom>
    );
  }
}
      `,
    });

    return (
      <AlignBottom isRemixing={false}>
        <Card>
          <DisplayText
            displayType="title"
            text="Something is for sale"
          />
          <DisplayText displayType="description" text={demoText} />
          <SubmitButton
            text="Action"
            mode="ready"
            onClick={() => {}}
          />
        </Card>
      </AlignBottom>
    );
  }
}
