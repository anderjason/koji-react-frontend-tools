import * as React from "react";
import { AlignBottom, Card, ToggleButton } from "../../../src";
import { ReactDemoComponentProps } from "../_internal/ReactDemoContainer";

interface ToggleButtonDemoState {
  isToggleActive: boolean;
}

export class ToggleButtonDemo extends React.Component<
  ReactDemoComponentProps,
  ToggleButtonDemoState
> {
  state = {
    isToggleActive: false,
  } as ToggleButtonDemoState;

  render() {
    const { isToggleActive } = this.state;

    // display example code in the sidebar
    this.props.demoActor.exampleCode.setValue({
      language: "jsx",
      code: `
class Demo extends React.Component {
  state = {
    isToggleActive: false
  };

  render() {
    const { isToggleActive } = this.state;

    return (
      <AlignBottom isRemixing={false}>
        <Card
          renderContent={() => (
            <ToggleButton
              defaultValue={isToggleActive}
              onChange={(value) => this.setState({ isToggleActive: value })}
            />
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
          renderContent={() => (
            <>
              <ToggleButton
                defaultValue={isToggleActive}
                onChange={(value) => this.setState({ isToggleActive: value })}
              />
              <div>{isToggleActive ? "ON" : "OFF"}</div>
            </>
          )}
        />
      </AlignBottom>
    );
  }
}
