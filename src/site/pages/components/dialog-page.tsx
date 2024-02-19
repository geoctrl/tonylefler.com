import { ParentProps, mergeProps } from "solid-js";
import { Button, Dialog } from "@stem/components";

type Props = ParentProps<{}>;

const defaultProps: Partial<Props> = {};

export const DialogPage = (_props: Props) => {
  const props = mergeProps(defaultProps, _props);
  return (
    <div>
      <Dialog
        renderTrigger={(floatProps) => (
          <Button {...floatProps}>Delete Collection</Button>
        )}
      />
    </div>
  );
};
