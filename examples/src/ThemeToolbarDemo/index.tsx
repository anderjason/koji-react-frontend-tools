import { KojiAppearance } from "@anderjason/koji-frontend-tools";
import { ElementStyle } from "@anderjason/web";
import * as React from "react";
import { ThemeToolbar } from "../../../src";
import { ReactDemoComponentProps } from "../_internal/ReactDemoContainer";

export class ThemeToolbarDemo extends React.Component<
  ReactDemoComponentProps,
  any
> {
  state = {
    theme: KojiAppearance.themes.get("gradient1"),
  };

  render() {
    // display example code in the sidebar
    this.props.demoActor.exampleCode.setValue({
      language: "jsx",
      code: `
import { ElementStyle } from "@anderjason/web";
import { KojiAppearance } from "@anderjason/koji-frontend-tools";

class Demo extends React.Component {
  state = {
    theme: KojiAppearance.themes.get("gradient1"),
  };
  
  render() {
    const { theme } = this.state;

    return (
      <React.Fragment>
        <ThemeToolbar
          defaultValue={theme}
          onChange={(theme) => this.setState({ theme })}
        />

        <div
          className={ExampleBackgroundStyle.toCombinedClassName()}
          style={theme.toBackgroundStyle()}
        />

        <div
          className={ExampleTextStyle.toCombinedClassName()}
          style={theme.toTextStyle()}
        >
          Example text
        </div>
      </React.Fragment>
    );
  }
}

const ExampleBackgroundStyle = ElementStyle.givenDefinition({
  css: \`
    border-radius: 3px;
    bottom: 20px;
    height: 45px;
    left: 20px;
    position: absolute;
    width: 150px;
  \`,
});

const ExampleTextStyle = ElementStyle.givenDefinition({
  css: \`
    align-items: center;
    bottom: 20px;
    display: flex;
    height: 45px;
    position: absolute;
    right: 30px;
  \`,
});
      `,
    });

    return (
      <React.Fragment>
        <ThemeToolbar
          defaultValue={this.state.theme}
          onChange={(theme) => this.setState({ theme })}
        />

        <div
          className={ExampleBackgroundStyle.toCombinedClassName()}
          style={this.state.theme.toBackgroundStyle()}
        />

        <div
          className={ExampleTextStyle.toCombinedClassName()}
          style={this.state.theme.toTextStyle()}
        >
          Example text
        </div>
      </React.Fragment>
    );
  }
}

const ExampleBackgroundStyle = ElementStyle.givenDefinition({
  css: `
    border-radius: 3px;
    bottom: 20px;
    height: 45px;
    left: 20px;
    position: absolute;
    width: 150px;
  `,
});

const ExampleTextStyle = ElementStyle.givenDefinition({
  css: `
    align-items: center;
    bottom: 20px;
    display: flex;
    height: 45px;
    position: absolute;
    right: 30px;
  `,
});
