import * as React from "react";
import { AlignBottom, Card, DisplayText, SubmitButton } from "../../../src";
import { ReactDemoComponentProps } from "../_internal/ReactDemoContainer";

const demoText = `Welcome to my meme shop!

Make your choice and I'll send you a meme. You can let me know in the description if you want a specific theme or just a random one.`;

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
        <Card
          renderFooterContent={() => (
            <SubmitButton text="Action" mode="ready" onClick={() => {}} />
          )}
          renderContent={() => (
            <React.Fragment>
              <DisplayText displayType="title" text="Something is for sale" />
              <DisplayText displayType="description" text={demoText} />
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
      <AlignBottom isRemixing={false}>
        <Card
          renderFooterContent={() => (
            <SubmitButton text="Action" mode="ready" onClick={() => {}} />
          )}
          renderContent={() => (
            <React.Fragment>
              <DisplayText displayType="title" text="Something is for sale" />
              <DisplayText displayType="description" text={demoText} />
            </React.Fragment>
          )}
        />
      </AlignBottom>
    );
  }
}
