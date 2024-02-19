import { ParentProps, mergeProps } from "solid-js";
import { Float, FloatProps } from "@stem/build";
import { inlineSwitch } from "../../../utils/inline-switch";
import { Button } from "../button/button";
import { DialogHeader } from "./dialog-header";
import { DialogBody } from "./dialog-body";
import { DialogFooter } from "./dialog-footer";

type Props = ParentProps<{
  size?: "sm" | "md" | "lg" | number;
}> &
  Pick<FloatProps, "renderTrigger">;

const defaultProps: Partial<Props> = {
  size: "md",
};

export const Dialog = (_props: Props) => {
  const props = mergeProps(defaultProps, _props);

  const numberSize =
    (typeof props.size === "number"
      ? props.size
      : inlineSwitch(props.size!, {
          sm: 360,
          md: 460,
          lg: 600,
        })) || 200;

  return (
    <Float
      coverTrigger
      allowContentClicks
      renderTrigger={props.renderTrigger}
      backdrop
      renderContent={() => (
        <div
          style={{ width: `${numberSize / 16}rem` }}
          tabIndex={0}
          onLoad={(e) => {
            const target = e.target as HTMLElement;
            target.focus();
          }}
        >
          <DialogHeader showCloseBtn={false} title="Delete Collection" />
          <DialogBody>This action cannot be undone.</DialogBody>
          <DialogFooter>
            <Button block>Cancel</Button>
            <Button variant="primary" block>
              Delete
            </Button>
          </DialogFooter>

          <div class="rounded-sm"></div>
        </div>
      )}
    />
  );
};
