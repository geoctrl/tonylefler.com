import { ParentProps, mergeProps } from "solid-js";
import { Button } from "@stem/components";
import { AppHeader } from "../../components/app-header";
import { A } from "@solidjs/router";

type Props = ParentProps<{}>;

const defaultProps: Partial<Props> = {};

export const DemoPage = (_props: Props) => {
  const props = mergeProps(defaultProps, _props);
  return (
    <>
      <AppHeader />
      <div class="p-8">
        <div class="flex gap-4">
          <div class="w-40 shrink-0">
            <Button
              block
              alignContent="left"
              variant="tertiary"
              as={A}
              href="/demos/music-app"
            >
              Music App
            </Button>
          </div>
          <div class="shrink">{props.children}</div>
        </div>
      </div>
    </>
  );
};
