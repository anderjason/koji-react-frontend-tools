import { KojiAppearance } from "@anderjason/koji-frontend-tools";
import * as React from "react";
import {
  AlignBottom,
  Card,
  Description,
  DisplayText,
  ThemeToolbar,
} from "../../../src";
import { ReactDemoComponentProps } from "../_internal/ReactDemoContainer";

export class DisplayTextDemo extends React.Component<
  ReactDemoComponentProps,
  any
> {
  state = {
    theme: KojiAppearance.themes.get("kojiBlack"),
  };

  render() {
    const { theme } = this.state;

    // display example code in the sidebar
    this.props.demoActor.exampleCode.setValue({
      language: "jsx",
      code: `
import { KojiAppearance } from "@anderjason/koji-frontend-tools";

class Demo extends React.Component {
  state = {
    theme: KojiAppearance.themes.get("kojiBlack"),
  };

  render() {
    const { theme } = this.state;

    return (
      <React.Fragment>
        <ThemeToolbar
          defaultValue={this.state.theme}
          onChange={(theme) => this.setState({ theme })}
        />

        <AlignBottom isRemixing={false}>
          <Card>
            <DisplayText
              displayType="title"
              text="Something is for sale"
              color={theme.toColor()}
            />
            <Description text="This is a description of the thing" />
          </Card>
        </AlignBottom>
      </React.Fragment>
    );
  }
}
      `,
    });

    return (
      <React.Fragment>
        <ThemeToolbar
          defaultValue={this.state.theme}
          onChange={(theme) => this.setState({ theme })}
        />

        <AlignBottom isRemixing={false}>
          <Card>
            <DisplayText
              displayType="title"
              text="Something is for sale"
              color={theme.toColor()}
            />
            <Description text="This is a description of the thing" />
          </Card>
        </AlignBottom>
      </React.Fragment>
    );
  }
}
