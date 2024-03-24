import { ParentProps, mergeProps } from "solid-js";
import { Button } from "@stem/components";
import { AppHeader } from "../../components/app-header";
import { A } from "@solidjs/router";

type Props = ParentProps<{}>;

const defaultProps: Partial<Props> = {};

export const DemoPage = (_props: Props) => {
  const props = mergeProps(defaultProps, _props);
  return (
    <div class="flex h-screen flex-col">
      <AppHeader />
      <div class="grow">{props.children}</div>
    </div>
  );
};
