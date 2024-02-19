import { ParentProps, mergeProps, Show, JSX } from "solid-js";

type Props = ParentProps<{
  title?: string;
  actions?: JSX.Element;
  showCloseBtn?: boolean;
}>;

const defaultProps: Partial<Props> = {
  showCloseBtn: true,
};

export const DialogHeader = (_props: Props) => {
  const props = mergeProps(defaultProps, _props);
  return (
    <div class="flex items-center justify-center pt-8 text-center">
      <div class="text-xl font-bold">{props.title}</div>
    </div>
  );
};
