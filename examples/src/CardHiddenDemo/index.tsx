import * as React from "react";
import { AlignBottom, Card, SubmitButton } from "../../../src";
import { ReactDemoComponentProps } from "../_internal/ReactDemoContainer";

export class CardHiddenDemo extends React.Component<
  ReactDemoComponentProps,
  any
> {
  state = {
    isVisible: false,
  };

  render() {
    const { isVisible } = this.state;

    // display example code in the sidebar
    this.props.demoActor.exampleCode.setValue({
      language: "jsx",
      code: `
class Demo extends React.Component {
  render() {
    return (
      <AlignBottom isRemixing={false}>
        <Card
          mode="${isVisible ? "visible" : "hidden"}"
          maxHeight={250}
          anchorBottom={false}
          renderHiddenContent={() =>
            <SubmitButton
              mode="ready"
              text="Show card"
              onClick={() => { }}
            />
          }
          renderFooterContent={() =>
            <SubmitButton
              mode="ready"
              text="Hide card"
              onClick={() => { }}
            />
          }
        >
          <div>
            Lorem ipsum...
          </div>
        </Card>
      </AlignBottom>
    );
  }
}
        `,
    });

    return (
      <AlignBottom isRemixing={false}>
        <Card
          mode={isVisible ? "visible" : "hidden"}
          maxHeight={250}
          renderHiddenContent={() => (
            <SubmitButton
              mode="ready"
              text="Show card"
              onClick={() => this.setState({ isVisible: true })}
            />
          )}
          renderFooterContent={() => (
            <SubmitButton
              mode="ready"
              text="Hide card"
              onClick={() => this.setState({ isVisible: false })}
            />
          )}
          renderContent={() => (
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          )}
        />
      </AlignBottom>
    );
  }
}
