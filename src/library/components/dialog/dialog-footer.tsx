import { ParentProps, mergeProps } from "solid-js";

type Props = ParentProps<{}>;

const defaultProps: Partial<Props> = {};

export const DialogFooter = (_props: Props) => {
  const props = mergeProps(defaultProps, _props);
  return (
    <div class="flex items-center justify-end gap-3 p-4">{props.children}</div>
  );
};
