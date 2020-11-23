import { ObservableArray } from "@anderjason/observable";
import { ExampleDefinition, ExamplesHome } from "@anderjason/example-tools";
import { ReactDemoContainer } from "./_internal/ReactDemoContainer";
import { SubmitButtonDemo } from "./SubmitButtonDemo";
import { AlignBottomDemo } from "./AlignBottomDemo";
import { FloatLabelTextInputDemo } from "./FloatLabelTextInputDemo";
import { IntegerInputDemo } from "./IntegerInputDemo";
import { MoneyInputDemo } from "./MoneyInputDemo";
import { ThemeToolbarDemo } from "./ThemeToolbarDemo";
import { LoadingIndicatorDemo } from "./LoadingIndicatorDemo";
import { DisplayTextDemo } from "./DisplayTextDemo";

const definitions = ObservableArray.givenValues<ExampleDefinition>([
  {
    title: "Align bottom",
    actor: new ReactDemoContainer({
      component: AlignBottomDemo,
    }),
  },
  {
    title: "Display text",
    actor: new ReactDemoContainer({
      component: DisplayTextDemo,
    }),
  },
  {
    title: "Float label text input",
    actor: new ReactDemoContainer({
      component: FloatLabelTextInputDemo,
    }),
  },
  {
    title: "Integer input",
    actor: new ReactDemoContainer({
      component: IntegerInputDemo,
    }),
  },
  {
    title: "Loading indicator",
    actor: new ReactDemoContainer({
      component: LoadingIndicatorDemo,
    }),
  },
  {
    title: "Money input",
    actor: new ReactDemoContainer({
      component: MoneyInputDemo,
    }),
  },
  {
    title: "Submit button",
    actor: new ReactDemoContainer({
      component: SubmitButtonDemo,
    }),
  },
  {
    title: "Theme toolbar",
    actor: new ReactDemoContainer({
      component: ThemeToolbarDemo,
    }),
  },
]);

const main = new ExamplesHome({
  title: "koji-react-frontend-tools",
  definitions,
});
main.activate();
