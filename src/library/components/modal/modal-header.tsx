import { ParentProps, mergeProps, useContext, Show, JSX } from "solid-js";
import { ModalContext } from "./modal-context";
import { Button } from "@stem/components";

type Props = ParentProps<{
  title?: string;
  actions?: JSX.Element;
  showCloseBtn?: boolean;
}>;

const defaultProps: Partial<Props> = {
  showCloseBtn: true,
};

export const ModalHeader = (_props: Props) => {
  const props = mergeProps(defaultProps, _props);
  const { onClose } = useContext(ModalContext);
  return (
    <div class="app-border flex items-center justify-between border-b py-2 pl-5 pr-2">
      <div class="flex items-center">
        <Show when={!props.children} fallback={props.children}>
          <div class="text-xl font-bold">{props.title}</div>
        </Show>
      </div>

      <Show when={props.showCloseBtn}>
        <Button
          onClick={() => onClose?.()}
          iconOnly="xmark-regular"
          variant="tertiary"
        />
      </Show>
    </div>
  );
};
