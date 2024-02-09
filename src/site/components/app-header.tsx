import { ParentProps, mergeProps } from "solid-js";

import logo from "../assets/logo.png";
import { DarkModeToggle } from "./dark-mode-toggle";
import { css } from "../../utils/classname-helpers";
import { Button } from "../../library";
import { A } from "@solidjs/router";

type Props = ParentProps<{}>;

const defaultProps: Partial<Props> = {};

export const AppHeader = (_props: Props) => {
  const props = mergeProps(defaultProps, _props);
  return (
    <div
      class={css(
        "flex h-14 items-center justify-between bg-grey-200 px-4",
        "dark:bg-raisin-600",
      )}
    >
      {/*left*/}
      <div class="flex items-center">
        <div class="mr-4 inline-block size-8 overflow-hidden rounded-md">
          <img src={logo} class="content size-full object-cover" alt="Logo" />
        </div>
        <div class="text-lg font-medium mr-16">App Title</div>

        <div class="hidden sm:flex gap-4">
          <Button size="sm" variant="tertiary" as={A} href="/components">
            Components
          </Button>
          <Button size="sm" variant="tertiary" as={A} href="/demos">
            Demos
          </Button>
        </div>
      </div>

      {/*right*/}
      <div class="flex items-center gap-4">
        <Button variant="tertiary" size="sm" class="sm:hidden" dropdown>
          Menu
        </Button>
        <DarkModeToggle />
      </div>
    </div>
  );
};
