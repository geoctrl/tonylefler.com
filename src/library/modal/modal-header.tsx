import { ParentProps, mergeProps, useContext } from "solid-js";
import { ModalContext } from "./modal-context";
import { Button } from "../button/button";

type Props = ParentProps<{}>;

const defaultProps: Partial<Props> = {};

export const ModalHeader = (_props: Props) => {
  const props = mergeProps(defaultProps, _props);
  const { onClose } = useContext(ModalContext);
  return (
    <div class="flex items-center justify-between p-2">
      <div class="ml-2 text-xl font-bold">{props.children}</div>
      <Button
        onClick={() => onClose?.()}
        iconOnly="xmark-regular"
        variant="tertiary"
        size="sm"
      />
    </div>
  );
};
