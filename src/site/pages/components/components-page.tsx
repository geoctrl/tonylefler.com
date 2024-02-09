import { ParentProps, mergeProps } from "solid-js";
import { AppHeader } from "../../components/app-header";
import { Float } from "../../../library/float/float";
import { Button } from "../../../library";

type Props = ParentProps<{}>;

const defaultProps: Partial<Props> = {};

export const ComponentsPage = (_props: Props) => {
  const props = mergeProps(defaultProps, _props);
  return (
    <>
      <AppHeader />
      {props.children}

      <div class="pt-10">
        <Float
          renderTrigger={(floatProps) => (
            <Button {...floatProps}>trigger</Button>
          )}
          renderContent={(floatProps) => <div {...floatProps}>content</div>}
        />
      </div>
    </>
  );
};
