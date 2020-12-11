import { SubmitButtonMode } from "@anderjason/koji-frontend-tools/dist/SubmitButton";
import * as React from "react";
import { AlignBottom, SubmitButton, Card } from "../../../src";
import { ReactDemoComponentProps } from "../_internal/ReactDemoContainer";

interface SubmitButtonDemoState {
  buttonMode: SubmitButtonMode;
}

export class SubmitButtonDemo extends React.Component<
  ReactDemoComponentProps,
  SubmitButtonDemoState
> {
  state = {
    buttonMode: "ready",
  } as SubmitButtonDemoState;

  onClickUnlock() {
    if (this.state.buttonMode !== "ready") {
      return;
    }

    this.setState({
      buttonMode: "busy",
    });

    setTimeout(() => {
      this.setState({
        buttonMode: "success",
      });
    }, 1000);

    setTimeout(() => {
      this.setState({
        buttonMode: "ready",
      });
    }, 3000);
  }

  render() {
    const { buttonMode } = this.state;

    // display example code in the sidebar
    this.props.demoActor.exampleCode.setValue({
      language: "jsx",
      code: `
class Demo extends React.Component {
  state = {
    buttonMode: "ready",
  };

  onClickUnlock() {
    if (this.state.buttonMode !== "ready") {
      return;
    }

    this.setState({
      buttonMode: "busy",
    });

    setTimeout(() => {
      this.setState({
        buttonMode: "success",
      });
    }, 1000);

    setTimeout(() => {
      this.setState({
        buttonMode: "ready",
      });
    }, 3000);
  };

  render() {
    const { buttonMode } = this.state;

    return (
      <AlignBottom isRemixing={false}>
        <Card>
          <SubmitButton
            text="Unlock now"
            mode="${buttonMode}"
            theme={theme}
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
            text="Unlock now"
            mode={buttonMode}
            onClick={() => this.onClickUnlock()}
          />
        </Card>
      </AlignBottom>
    );
  }
}
