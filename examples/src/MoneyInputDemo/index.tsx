import { Currency, Money } from "@anderjason/money";
import * as React from "react";
import { AlignBottom, Card, DisplayText, MoneyInput } from "../../../src";
import { ReactDemoComponentProps } from "../_internal/ReactDemoContainer";

const maxPrice = new Money(100000, Currency.ofUSD());

export class MoneyInputDemo extends React.Component<
  ReactDemoComponentProps,
  any
> {
  state = {
    price: new Money(1995, Currency.ofUSD()),
  };

  render() {
    const { price } = this.state;

    // display example code in the sidebar
    this.props.demoActor.exampleCode.setValue({
      language: "jsx",
      code: `
import { Money, Currency } from "@anderjason/money";

const maxPrice = new Money(100000, Currency.ofUSD());

class Demo extends React.Component {
  state = {
    price: new Money(1995, Currency.ofUSD())
  };

  render() {
    const { price } = this.state;

    const formattedPrice = price != null ? 
      \`The price is \${price.toString("$1.00")}\` : 
      "Price is not set";

    return (
      <AlignBottom isRemixing={false}>
        <Card
          renderContent={() => (
            <React.Fragment>
              <DisplayText displayType="description" text={formattedPrice} />

              <MoneyInput
                placeholderLabel="Price"
                persistentLabel="Set price"
                defaultValue={price}
                maxValue={maxPrice}
                onChange={(price) => this.setState({ price })}
                allowEmpty={true}
              />
            </React.Fragment>
          )}
        />
      </AlignBottom>
    );
  }
}
      `,
    });

    const formattedPrice =
      price != null
        ? `The price is ${price.toString("$1.00")}`
        : "Price is not set";

    return (
      <AlignBottom isRemixing={false}>
        <Card
          renderContent={() => (
            <React.Fragment>
              <DisplayText displayType="description" text={formattedPrice} />

              <MoneyInput
                placeholderLabel="Price"
                persistentLabel="Set price"
                defaultValue={price}
                maxValue={maxPrice}
                onChange={(price) => this.setState({ price })}
                allowEmpty={true}
              />
            </React.Fragment>
          )}
        />
      </AlignBottom>
    );
  }
}

