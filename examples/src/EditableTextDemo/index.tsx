import * as React from "react";
import {
  AlignBottom,
  Card,
  EditableText,
  SubmitButton,
} from "../../../src";
import { ReactDemoComponentProps } from "../_internal/ReactDemoContainer";

export class EditableTextDemo extends React.Component<
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
      <AlignBottom isRemixing={true}>
        <Card>
          <EditableText
            displayType="title"
            placeholderLabel="Title"
            theme={theme}
          />
          <EditableText
            displayType="description"
            placeholderLabel="Description"
          />
          <SubmitButton
            text="Action"
            mode="ready"
            theme={theme}
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
      <AlignBottom isRemixing={true}>
        <Card>
          <EditableText
            displayType="title"
            placeholderLabel="Title"
            onChange={() => {}}
          />
          <EditableText
            displayType="description"
            placeholderLabel="Description"
            onChange={() => {}}
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
