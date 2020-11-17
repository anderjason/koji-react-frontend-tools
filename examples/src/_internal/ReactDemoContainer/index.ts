import { DemoActor } from "@anderjason/example-tools";
import { ExclusiveActivator } from "skytree";
import { ReactBridge } from "../../../../src/ReactBridge";

export interface ReactDemoComponentProps {
  demoActor: DemoActor<any>;
}

export interface ReactDemoContainerProps {
  component: React.ComponentClass<ReactDemoComponentProps>;
}

export class ReactDemoContainer extends DemoActor<ReactDemoContainerProps> {
  onActivate() {
    this.addActor(
      new ExclusiveActivator({
        input: this.parentElement,
        fn: (parentElement) => {
          if (parentElement == null) {
            return null;
          }

          return new ReactBridge({
            parentElement,
            component: this.props.component,
            props: {
              demoActor: this,
            },
          });
        },
      })
    );
  }
}
