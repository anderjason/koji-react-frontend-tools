import { KojiAppearance } from "@anderjason/koji-frontend-tools";
import * as React from "react";
import { AlignBottom, Card, EditableText, ThemeToolbar } from "../../../src";
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
              placeholderLabel="Product title"
              theme={theme}
            />
            <EditableText
              displayType="description"
              placeholderLabel="Product description"
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
              placeholderLabel="Product title"
              theme={theme}
              onChange={() => {}}
            />
            <EditableText
              displayType="description"
              placeholderLabel="Product description"
              onChange={() => {}}
            />
          </Card>
        </AlignBottom>
      </>
    );
  }
}
