import { ParentProps, mergeProps } from "solid-js";

type Props = ParentProps<{}>;

const defaultProps: Partial<Props> = {};

export const MenuPage = (_props: Props) => {
  const props = mergeProps(defaultProps, _props);
  return <div>menu page</div>;
};
