import * as React from "react";
import { AlignBottom, Card, FloatLabelTextarea } from "../../../src";
import { ReactDemoComponentProps } from "../_internal/ReactDemoContainer";

export class FloatLabelTextareaDemo extends React.Component<
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
          <FloatLabelTextarea
            placeholderLabel="Type a message"
            persistentLabel="Message"
            onChange={title => this.onChangeTitle(title)}
            minRows={2}
            maxRows={4}
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
          <FloatLabelTextarea
            placeholderLabel="Type a message"
            persistentLabel="Message"
            onChange={() => {}}
            minRows={2}
            maxRows={4}
          />
        </Card>
      </AlignBottom>
    );
  }
}
