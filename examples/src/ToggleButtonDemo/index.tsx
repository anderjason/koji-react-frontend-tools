import * as React from "react";
import { AlignBottom, Card, ToggleButton } from "../../../src";
import { ReactDemoComponentProps } from "../_internal/ReactDemoContainer";

interface ToggleButtonDemoState {
  isActive: boolean;
}

export class ToggleButtonDemo extends React.Component<
  ReactDemoComponentProps,
  ToggleButtonDemoState
> {
  state = {
    isActive: false
  };

  render() {
    const { isActive } = this.state;

    // display example code in the sidebar
    this.props.demoActor.exampleCode.setValue({
      language: "jsx",
      code: `
class Demo extends React.Component {
  state = {
    isActive: false
  };

  render() {
    const { isActive } = this.state;

    return (
      <AlignBottom isRemixing={false}>
        <Card
          renderContent={() => (
            <ToggleButton
              defaultValue={isActive}
              onChange={(value) => this.setState({ isActive: value })}
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
            <ToggleButton
              defaultValue={isActive}
              onChange={(value) => this.setState({ isActive: value })}
            />
          )}
        />
      </AlignBottom>
    );
  }
}
