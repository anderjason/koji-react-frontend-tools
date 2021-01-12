import { PublishButtonMode } from "@anderjason/koji-frontend-tools/dist/PublishButton";
import * as React from "react";
import { PublishButton } from "../../../src";
import { ReactDemoComponentProps } from "../_internal/ReactDemoContainer";

interface PublishButtonDemoState {
  mode: PublishButtonMode;
} 

export class PublishButtonDemo extends React.Component<
  ReactDemoComponentProps,
  PublishButtonDemoState
> {
  state = {
    mode: { type: "ready" },
  } as PublishButtonDemoState;

  onClick() {
    // to publish if there are no validation errors:
    // KojiTools.instance.instantRemix.finish();
    
    this.setState({
      mode: {
        type: "busy"
      }
    });

    setTimeout(() => {
      this.setState({
        mode: {
          type: "error",
          errorText: "Please correct errors before continuing"
        }
      });
    }, 1000);

    setTimeout(() => {
      this.setState({
        mode: {
          type: "ready"
        },
      });
    }, 3000);
  };

  render() {
    const { mode } = this.state;

    // display example code in the sidebar
    this.props.demoActor.exampleCode.setValue({
      language: "jsx",
      code: `
import { KojiTools } from "@anderjason/koji-frontend-tools";

class Demo extends React.Component {
  state = {
    mode: { type: "ready" },
  };

  onClickUnlock() {
    // To publish if there are no validation errors:
    // KojiTools.instance.instantRemix.finish();
    
    // Note: The button will be disabled in the busy mode, but
    // it's still clickable in the error mode, because
    // the user might want to validate again

    this.setState({
      mode: {
        type: "busy"
      }
    });

    // setTimeout is only for demo purposes here.
    // If you click multiple times, you might get
    // out of order mode changes because of these timeouts
    setTimeout(() => {
      this.setState({
        mode: {
          type: "error",
          errorText: "Please correct errors before continuing"
        }
      });
    }, 1000);

    setTimeout(() => {
      this.setState({
        buttonMode: "ready",
      });
    }, 3000);
  };

  render() {
    const { mode } = this.state;

    return (
      <PublishButton
        mode={mode}
        onClick={() => KojiTools.instance.instantRemix.finish()}
      />
    );
  }
}
      `,
    });

    return (
      <PublishButton
        mode={mode}
        onClick={() => this.onClick()}
      />
    );
  }
}
