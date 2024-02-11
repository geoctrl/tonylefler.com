import { ParentProps, mergeProps } from "solid-js";

type Props = ParentProps<{}>;

const defaultProps: Partial<Props> = {};

export const List = (_props: Props) => {
  const props = mergeProps(defaultProps, _props);
  return <div class="py-1.5 flex flex-col">{props.children}</div>;
};
