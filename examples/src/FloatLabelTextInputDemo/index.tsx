import * as React from "react";
import { AlignBottom, Card, FloatLabelTextInput } from "../../../src";
import { ReactDemoComponentProps } from "../_internal/ReactDemoContainer";

export class FloatLabelTextInputDemo extends React.Component<
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
      <AlignBottom isRemixing={false}>
        <Card>
          <FloatLabelTextInput
            placeholderLabel="Title"
            persistentLabel="Set title"
            onChange={title => this.onChangeTitle(title)}
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
          <FloatLabelTextInput
            placeholderLabel="Title"
            persistentLabel="Set title"
            onChange={() => {}}
          />
        </Card>
      </AlignBottom>
    );
  }
}
