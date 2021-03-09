import { Duration } from "@anderjason/time";
import * as React from "react";
import { Timer } from "skytree";
import { AlignBottom, Card, VerticalExpander } from "../../../src";
import { ReactDemoComponentProps } from "../_internal/ReactDemoContainer";

interface VerticalExpanderDemoState {
  isExpanded: boolean;
}

export class VerticalExpanderDemo extends React.Component<
  ReactDemoComponentProps,
  VerticalExpanderDemoState
> {
  state = {
    isExpanded: false,
  } as VerticalExpanderDemoState;

  private _timer: Timer;

  componentDidMount() {
    this._timer = new Timer({
      duration: Duration.givenSeconds(1.5),
      isRepeating: true,
      fn: () => {
        this.setState({
          isExpanded: !this.state.isExpanded
        });
      }
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
    const { isExpanded } = this.state;

    // display example code in the sidebar
    this.props.demoActor.exampleCode.setValue({
      language: "jsx",
      code: `
class Demo extends React.Component {
  render() {
    return (
      <AlignBottom isRemixing={false}>
        <Card
          renderContent={() => (
            <div style={{ minHeight: 0.1 }}>
              <VerticalExpander isExpanded={${isExpanded}}>
                Lorem ipsum dolor...
              </VerticalExpander>
            </div>
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
            <div style={{ minHeight: 0.1 }}>
              <VerticalExpander isExpanded={isExpanded}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </VerticalExpander>
            </div>
          )}
        />
      </AlignBottom>
    );
  }
}
