import { OptionsListItemData } from "@anderjason/koji-frontend-tools/dist/OptionsList";
import { Observable, ObservableArray } from "@anderjason/observable";
import * as React from "react";
import { AlignBottom, Card, OptionsList } from "../../../src";
import { ReactDemoComponentProps } from "../_internal/ReactDemoContainer";

export class OptionsListDemo extends React.Component<
  ReactDemoComponentProps,
  any
> {
  private _whoCanPostSummary = Observable.givenValue("Everyone");
  private _price = Observable.givenValue<string>("free");
  private _approvePosts = Observable.givenValue<boolean>(false);

  private _optionsListItems = ObservableArray.givenValues<OptionsListItemData>([
    {
      label: "Who can post?",
      accessoryData: {
        type: "detail",
        text: this._whoCanPostSummary,
        onClick: () => {}
      },
    },
    {
      label: "Advanced options",
      accessoryData: {
        type: "detail",
        onClick: () => {}
      },
    },
    {
      label: "Approve posts before they go live",
      accessoryData: {
        type: "toggle",
        isActive: this._approvePosts
      },
    },
    {
      label: "Free",
      accessoryData: {
        type: "radio",
        key: "free",
        selectedKey: this._price
      },
    },
    {
      label: "Premium",
      accessoryData: {
        type: "radio",
        key: "premium",
        selectedKey: this._price
      },
    },
  ]);

  render() {
    // display example code in the sidebar
    this.props.demoActor.exampleCode.setValue({
      language: "jsx",
      code: `
      // TODO
      `,
    });

    return (
      <AlignBottom isRemixing={false}>
        <Card
          renderContent={() => (
            <OptionsList items={this._optionsListItems} />
          )}
        />
      </AlignBottom>
    );
  }
}
