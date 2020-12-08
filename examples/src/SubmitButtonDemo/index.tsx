import {
  KojiAppearance,
  KojiTheme,
} from "@anderjason/koji-frontend-tools/dist/KojiAppearance";
import { SubmitButtonMode } from "@anderjason/koji-frontend-tools/dist/SubmitButton";
import * as React from "react";
import { AlignBottom, SubmitButton, Card, ThemeToolbar } from "../../../src";
import { ReactDemoComponentProps } from "../_internal/ReactDemoContainer";

interface SubmitButtonDemoState {
  buttonMode: SubmitButtonMode;
  theme: KojiTheme;
}

export class SubmitButtonDemo extends React.Component<
  ReactDemoComponentProps,
  SubmitButtonDemoState
> {
  state = {
    buttonMode: "ready",
    theme: KojiAppearance.themes.get("kojiBlack"),
  } as SubmitButtonDemoState;

  onClickUnlock() {
    if (this.state.buttonMode !== "ready") {
      return;
    }

    this.setState({
      buttonMode: "busy",
    });

    setTimeout(() => {
      this.setState({
        buttonMode: "success",
      });
    }, 1000);

    setTimeout(() => {
      this.setState({
        buttonMode: "ready",
      });
    }, 3000);
  }

  render() {
    const { buttonMode, theme } = this.state;

    // display example code in the sidebar
    this.props.demoActor.exampleCode.setValue({
      language: "jsx",
      code: `
import { KojiAppearance } from "@anderjason/koji-frontend-tools";

class Demo extends React.Component {
  state = {
    buttonMode: "ready",
    theme: KojiAppearance.themes.get("kojiBlack"),
  };

  onClickUnlock() {
    if (this.state.buttonMode !== "ready") {
      return;
    }

    this.setState({
      buttonMode: "busy",
    });

    setTimeout(() => {
      this.setState({
        buttonMode: "success",
      });
    }, 1000);

    setTimeout(() => {
      this.setState({
        buttonMode: "ready",
      });
    }, 3000);
  };

  render() {
    const { theme, buttonMode } = this.state;

    return (
      <>
        <ThemeToolbar
          defaultValue={theme}
          onChange={(theme) => this.setState({ theme })}
        />

        <AlignBottom isRemixing={false}>
          <Card>
            <SubmitButton
              text="Unlock now"
              mode="${buttonMode}"
              theme={theme}
              onClick={() => this.onClickUnlock()}
            />
          </Card>
        </AlignBottom>
      </>
    );
  }
}
      `,
    });

    return (
      <>
        <ThemeToolbar
          defaultValue={theme}
          onChange={(theme) => this.setState({ theme })}
        />

        <AlignBottom isRemixing={false}>
          <Card>
            <SubmitButton
              text="Unlock now"
              mode={buttonMode}
              theme={theme}
              onClick={this.onClickUnlock}
            />
          </Card>
        </AlignBottom>
      </>
    );
  }
}
