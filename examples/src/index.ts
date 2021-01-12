import { ObservableArray } from "@anderjason/observable";
import { ExampleDefinition, ExamplesHome } from "@anderjason/example-tools";
import { ReactDemoContainer } from "./_internal/ReactDemoContainer";
import { SubmitButtonDemo } from "./SubmitButtonDemo";
import { AlignBottomDemo } from "./AlignBottomDemo";
import { FloatLabelTextInputDemo } from "./FloatLabelTextInputDemo";
import { IntegerInputDemo } from "./IntegerInputDemo";
import { MoneyInputDemo } from "./MoneyInputDemo";
import { LoadingIndicatorDemo } from "./LoadingIndicatorDemo";
import { DisplayTextDemo } from "./DisplayTextDemo";
import { EditableTextDemo } from "./EditableTextDemo";
import { FloatLabelTextareaDemo } from "./FloatLabelTextareaDemo";
import { PublishButtonDemo } from "./PublishButtonDemo";
import { CardPagesDemo } from "./CardPagesDemo";
import { CardFooterDemo } from "./CardFooterDemo";
import { CardHiddenDemo } from "./CardHiddenDemo";

const definitions = ObservableArray.givenValues<ExampleDefinition>([
  {
    title: "Align bottom",
    actor: new ReactDemoContainer({
      component: AlignBottomDemo,
    }),
  },
  {
    title: "Card footer",
    actor: new ReactDemoContainer({
      component: CardFooterDemo,
    }),
  },
  {
    title: "Card hidden",
    actor: new ReactDemoContainer({
      component: CardHiddenDemo,
    }),
  },
  {
    title: "Card pages",
    actor: new ReactDemoContainer({
      component: CardPagesDemo,
    }),
  },
  {
    title: "Display text",
    actor: new ReactDemoContainer({
      component: DisplayTextDemo,
    }),
  },
  {
    title: "Editable text",
    actor: new ReactDemoContainer({
      component: EditableTextDemo,
    }),
  },
  {
    title: "Float label textarea",
    actor: new ReactDemoContainer({
      component: FloatLabelTextareaDemo,
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
    title: "Publish button",
    actor: new ReactDemoContainer({
      component: PublishButtonDemo,
    }),
  },
  {
    title: "Submit button",
    actor: new ReactDemoContainer({
      component: SubmitButtonDemo,
    }),
  },
]);

const main = new ExamplesHome({
  title: "koji-react-frontend-tools",
  definitions,
});
main.activate();
