import { ParentProps, mergeProps } from "solid-js";
import { AppHeader } from "../../components/app-header";
import { Button } from "@stem/components";
import { A } from "@solidjs/router";

type Props = ParentProps<{}>;

const defaultProps: Partial<Props> = {};

export const ComponentsPage = (_props: Props) => {
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
              href="/components/button"
            >
              Button
            </Button>
            <Button
              block
              alignContent="left"
              variant="tertiary"
              as={A}
              href="/components/avatar"
            >
              Avatar
            </Button>
            <Button
              block
              alignContent="left"
              variant="tertiary"
              as={A}
              href="/components/input"
            >
              Input
            </Button>
            <Button
              block
              alignContent="left"
              variant="tertiary"
              as={A}
              href="/components/modal"
            >
              Modal
            </Button>
            <Button
              block
              alignContent="left"
              variant="tertiary"
              as={A}
              href="/components/toggle"
            >
              Toggle
            </Button>
            <Button
              block
              alignContent="left"
              variant="tertiary"
              as={A}
              href="/components/dialog"
            >
              Dialog
            </Button>
          </div>
          <div class="shrink">{props.children}</div>
        </div>
      </div>
    </>
  );
};
