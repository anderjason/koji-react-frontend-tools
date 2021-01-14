import * as React from "react";
import { AlignBottom, Card, OptionsList } from "../../../src";
import { ReactDemoComponentProps } from "../_internal/ReactDemoContainer";

export class OptionsListDemo extends React.Component<
  ReactDemoComponentProps,
  any
> {
  render() {
    // display example code in the sidebar
    this.props.demoActor.exampleCode.setValue({
      language: "jsx",
      code: `
      // TODO
      `,
    });

    return (
      <AlignBottom isRemixing={false}>
        <Card
          renderContent={() => (
            <OptionsList
              defaultValues={{}}
              onChange={(key, value) => {
                console.log(`${key}=${value}`)
              }}
              definitions={[
                {
                  type: "detail",
                  label: "Who can post?",
                  summaryText: "Everyone",
                  onClick: () => {},
                },
                {
                  type: "detail",
                  label: "Advanced options",
                  onClick: () => {},
                },
                {
                  type: "toggle",
                  label: "Approve posts before they go live",
                  propertyName: "approvePosts"
                },
                {
                  type: "radio",
                  label: "Free",
                  propertyName: "price",
                  propertyValue: "free"
                },
                {
                  type: "radio",
                  label: "Premium",
                  propertyName: "price",
                  propertyValue: "premium"
                },
              ]}
            />
          )}
        />
      </AlignBottom>
    );
  }
}
