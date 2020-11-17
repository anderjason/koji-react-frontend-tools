import * as React from "react";
import { AlignBottom, SubmitButton, Card } from "../../../src";
import { ReactDemoComponentProps } from "../_internal/ReactDemoContainer";

export class SubmitButtonDemo extends React.Component<
  ReactDemoComponentProps,
  any
> {
  state = {
    isLocked: true,
  };

  onClickUnlock = () => {
    const { isLocked } = this.state;

    this.setState({
      isLocked: !isLocked,
    });
  };

  render() {
    const { isLocked } = this.state;

    // display example code in the sidebar
    this.props.demoActor.exampleCode.setValue({
      language: "jsx",
      code: `
class Demo extends React.Component {
  render() {
    return (
      <AlignBottom isRemixing={false}>
        <Card>
          <SubmitButton
            text="${isLocked ? "Unlock now" : "Unlocked!"}"
            onClick={() => this.onClickUnlock()}
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
          <SubmitButton
            text={isLocked ? "Unlock now" : "Unlocked!"}
            onClick={this.onClickUnlock}
          />
        </Card>
      </AlignBottom>
    );
  }
}
