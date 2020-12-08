import { KojiAppearance } from "@anderjason/koji-frontend-tools";
import * as React from "react";
import {
  AlignBottom,
  Card,
  EditableText,
  ThemeToolbar,
  SubmitButton,
} from "../../../src";
import { ReactDemoComponentProps } from "../_internal/ReactDemoContainer";

export class EditableTextDemo extends React.Component<
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

        <AlignBottom isRemixing={true}>
          <Card>
            <EditableText
              displayType="title"
              placeholderLabel="Title"
              theme={theme}
            />
            <EditableText
              displayType="description"
              placeholderLabel="Description"
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

        <AlignBottom isRemixing={true}>
          <Card>
            <EditableText
              displayType="title"
              placeholderLabel="Title"
              theme={theme}
              onChange={() => {}}
            />
            <EditableText
              displayType="description"
              placeholderLabel="Description"
              onChange={() => {}}
            />
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
