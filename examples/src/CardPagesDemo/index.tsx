import { Duration } from "@anderjason/time";
import * as React from "react";
import { Timer } from "skytree";
import { AlignBottom, Card } from "../../../src";
import { CardPage } from "../../../src/Card";
import { ReactDemoComponentProps } from "../_internal/ReactDemoContainer";

interface CardPagesDemoState {
  additionalPages: CardPage[];
}

export class CardPagesDemo extends React.Component<
  ReactDemoComponentProps,
  CardPagesDemoState
> {
  state = {
    additionalPages: [],
  } as CardPagesDemoState;

  private _timer: Timer;

  componentDidMount() {
    this._timer = new Timer({
      duration: Duration.givenSeconds(3),
      isRepeating: true,
      fn: () => {
        if (this.state.additionalPages.length === 0) {
          this.setState({
            additionalPages: [
              {
                title: "Additional options",
                renderContent: () => <div>Hello world</div>,
                renderFooterContent: () => <div>Footer content</div>,
                onRemoved: () => {
                  console.log("on removed");
                  this.setState({
                    additionalPages: [],
                  });
                },
              },
            ],
          });
        } else {
          this.setState({
            additionalPages: [],
          });
        }
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
    const { additionalPages } = this.state;

    // display example code in the sidebar
    if (additionalPages.length === 0) {
      this.props.demoActor.exampleCode.setValue({
        language: "jsx",
        code: `
class Demo extends React.Component {
  render() {
    return (
      <AlignBottom isRemixing={false}>
        <Card
          renderContent={() => (
            <div style={{ textAlign: "center" }}>First page</div>
          )}
        />
      </AlignBottom>
    );
  }
}
        `,
      });
    } else {
      this.props.demoActor.exampleCode.setValue({
        language: "jsx",
        code: `
class Demo extends React.Component {
  render() {
    const additionalPages = [
      {
        title: "Who can see this?",
        content: <div>List of switch options...</div>
      }
    ];

    return (
      <AlignBottom isRemixing={false}>
        <Card
          additionalPages={additionalPages}
          renderContent={() => (
            <div style={{ textAlign: "center" }}>First page</div>
          )}
        />
      </AlignBottom>
    );
  }
}
        `,
      });
    }

    return (
      <AlignBottom isRemixing={false}>
        <Card
          additionalPages={additionalPages}
          renderContent={() => (
            <div style={{ textAlign: "center" }}>First page</div>
          )}
        />
      </AlignBottom>
    );
  }
}
