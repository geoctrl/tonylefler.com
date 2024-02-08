import { ParentProps, mergeProps } from "solid-js";

type Props = ParentProps<{}>;

const defaultProps: Partial<Props> = {};

export const ModalBody = (_props: Props) => {
  const props = mergeProps(defaultProps, _props);
  return <div class="p-4">{props.children}</div>;
};
