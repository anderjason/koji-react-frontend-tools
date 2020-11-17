import * as React from "react";
import { AlignBottom, Card, IntegerInput } from "../../../src";
import { ReactDemoComponentProps } from "../_internal/ReactDemoContainer";

export class IntegerInputDemo extends React.Component<
  ReactDemoComponentProps,
  any
> {
  state = {
    qty: 5,
  };

  render() {
    // display example code in the sidebar
    this.props.demoActor.exampleCode.setValue({
      language: "jsx",
      code: `
class Demo extends React.Component {
  state = {
    qty: 5,
  };
      
  render() {
    return (
      <AlignBottom isRemixing={false}>
        <Card>
          <IntegerInput
            placeholderLabel="Quantity"
            persistentLabel="Set quantity"
            defaultValue={this.state.qty}
            onChange={qty => this.setState({ qty })}
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
          <IntegerInput
            placeholderLabel="Quantity"
            persistentLabel="Set quantity"
            defaultValue={this.state.qty}
            onChange={(qty) => this.setState({ qty })}
          />
        </Card>
      </AlignBottom>
    );
  }
}
