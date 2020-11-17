import { Duration } from "@anderjason/time";
import * as React from "react";
import { Timer } from "skytree";
import { AlignBottom, Card } from "../../../src";
import { ReactDemoComponentProps } from "../_internal/ReactDemoContainer";

export class AlignBottomDemo extends React.Component<
  ReactDemoComponentProps,
  any
> {
  state = {
    isRemixing: false,
  };

  private _timer: Timer;

  componentDidMount() {
    this._timer = new Timer({
      duration: Duration.givenSeconds(3),
      isRepeating: true,
      fn: () => {
        this.setState({
          isRemixing: !this.state.isRemixing,
        });
      },
    });
    this._timer.activate();
  }

  componentWillUnmount() {
    if (this._timer != null) {
      this._timer.deactivate();
      this._timer = undefined;
    }
  }

  render() {
    const { isRemixing } = this.state;

    // display example code in the sidebar
    this.props.demoActor.exampleCode.setValue({
      language: "jsx",
      code: `
class Demo extends React.Component {
  render() {
    return (
      <AlignBottom isRemixing={${isRemixing}}>
        <Card>
          <div style={{ textAlign: "center" }}>
            ${isRemixing ? "Remix mode" : "Normal mode"}
          </div>
        </Card>
      </AlignBottom>
    );
  }
}
      `,
    });

    return (
      <AlignBottom isRemixing={isRemixing}>
        <Card>
          <div style={{ textAlign: "center" }}>
            {isRemixing ? "Remix mode" : "Normal mode"}
          </div>
        </Card>
      </AlignBottom>
    );
  }
}
