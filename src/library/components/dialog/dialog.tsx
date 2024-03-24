import { ParentProps, mergeProps } from "solid-js";
import {
  Float,
  FloatProps,
  Button,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@stem/components";
import { inlineSwitch } from "../../../utils/inline-switch";

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
    typeof props.size === "number"
      ? props.size
      : inlineSwitch(
          props.size!,
          {
            sm: 360,
            md: 460,
            lg: 600,
          },
          "md",
        );
  return (
    <Float
      coverTrigger
      allowContentClicks
      renderTrigger={props.renderTrigger}
      backdrop
      renderContent={({ close }) => (
        <div
          style={{ width: `${numberSize / 10}rem` }}
          tabIndex={0}
          onLoad={(e) => {
            const target = e.target as HTMLElement;
            target.focus();
          }}
        >
          <DialogHeader showCloseBtn={false} title="Delete Collection" />
          <DialogBody>This action cannot be undone.</DialogBody>
          <DialogFooter>
            <Button block onClick={close}>
              Cancel
            </Button>
            <Button variant="primary" block onClick={close}>
              Delete
            </Button>
          </DialogFooter>

          <div class="rounded-sm"></div>
        </div>
      )}
    />
  );
};
