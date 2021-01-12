import * as React from "react";
import { AlignBottom, Card, EditableText, SubmitButton } from "../../../src";
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
        <Card
          renderFooterContent={() => (
            <SubmitButton text="Action" mode="ready" onClick={() => {}} />
          )}
          renderContent={() => (
            <React.Fragment>
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
            </React.Fragment>
          )}
        />
      </AlignBottom>
    );
  }
}
      `,
    });

    return (
      <AlignBottom isRemixing={true}>
        <Card
          renderFooterContent={() => (
            <SubmitButton text="Action" mode="ready" onClick={() => {}} />
          )}
          renderContent={() => (
            <React.Fragment>
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
            </React.Fragment>
          )}
        />
      </AlignBottom>
    );
  }
}
