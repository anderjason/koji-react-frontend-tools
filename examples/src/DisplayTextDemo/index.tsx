import { KojiAppearance } from "@anderjason/koji-frontend-tools";
import * as React from "react";
import {
  AlignBottom,
  Card,
  DisplayText,
  SubmitButton,
  ThemeToolbar,
} from "../../../src";
import { ReactDemoComponentProps } from "../_internal/ReactDemoContainer";

const demoText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

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

// const demoText = "Lorem ipsum dolor sit...

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
              theme={theme}
            />
            <DisplayText
              displayType="description"
              text={demoText}
            />
            <SubmitButton
              text="Action"
              mode="ready"
              theme={theme}
              onClick={() => {}}
            />
          </Card>
        </AlignBottom>
      </React.Fragment>
    );
  }
}
      `,
    });

    return (
      <>
        <ThemeToolbar
          defaultValue={this.state.theme}
          onChange={(theme) => this.setState({ theme })}
        />

        <AlignBottom isRemixing={false}>
          <Card>
            <DisplayText
              displayType="title"
              text="Something is for sale"
              theme={theme}
            />
            <DisplayText displayType="description" text={demoText} />
            <SubmitButton
              text="Action"
              mode="ready"
              theme={theme}
              onClick={() => {}}
            />
          </Card>
        </AlignBottom>
      </>
    );
  }
}
