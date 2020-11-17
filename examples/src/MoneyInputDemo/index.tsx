import { Currency, Money } from "@anderjason/money";
import { ElementStyle } from "@anderjason/web";
import * as React from "react";
import { AlignBottom, Card, MoneyInput } from "../../../src";
import { ReactDemoComponentProps } from "../_internal/ReactDemoContainer";

export class MoneyInputDemo extends React.Component<
  ReactDemoComponentProps,
  any
> {
  state = {
    price: new Money(1995, Currency.ofUSD()),
  };

  render() {
    // display example code in the sidebar
    this.props.demoActor.exampleCode.setValue({
      language: "jsx",
      code: `
import { Money, Currency } from "@anderjason/money";

class Demo extends React.Component {
  state = {
    price: new Money(1995, Currency.ofUSD())
  };

  render() {
    const { price } = this.state;

    return (
      <AlignBottom isRemixing={false}>
        <Card>
          <div style={{ marginBottom: "1rem" }}>
            The price is {price.toString("$1.00")}
          </div>

          <MoneyInput
            placeholderLabel="Price"
            persistentLabel="Set price"
            defaultValue={price}
            onChange={price => this.setState({ price })}
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
          <div style={{ marginBottom: "1rem" }}>
            The price is {this.state.price.toString("$1.00")}
          </div>

          <MoneyInput
            persistentLabel="Set price"
            defaultValue={this.state.price}
            onChange={(price) => this.setState({ price })}
          />
        </Card>
      </AlignBottom>
    );
  }
}

const CurrentValueStyle = ElementStyle.givenDefinition({
  css: `
    color: #007AFF;
    font-family: monospace;
    margin: 0 50px;
    font-size: 16px;
  `,
});
