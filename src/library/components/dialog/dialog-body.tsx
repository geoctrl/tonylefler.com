import { ParentProps, mergeProps } from "solid-js";

type Props = ParentProps<{}>;

const defaultProps: Partial<Props> = {};

export const DialogBody = (_props: Props) => {
  const props = mergeProps(defaultProps, _props);
  return <div class="px-8 py-4 text-center">{props.children}</div>;
};
