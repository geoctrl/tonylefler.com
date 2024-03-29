import { ParentProps, mergeProps } from "solid-js";

import logo from "../assets/logo.png";
import { DarkModeToggle } from "./dark-mode-toggle";
import { always } from "../../utils/classname-helpers";
import { Button, Menu, MenuButton } from "@stem/components";
import { A } from "@solidjs/router";

type Props = ParentProps<{}>;

const defaultProps: Partial<Props> = {};

export const AppHeader = (_props: Props) => {
  const props = mergeProps(defaultProps, _props);
  return (
    <div
      class={always(
        "flex h-16 items-center justify-between bg-grey-200 px-4",
        "dark:bg-raisin-600",
      )}
    >
      {/*left*/}
      <div class="flex items-center">
        {/*<div class="mr-4 inline-block size-8 overflow-hidden rounded-md">*/}
        {/*  <img src={logo} class="content size-full object-cover" alt="Logo" />*/}
        {/*</div>*/}
        <div class="mr-16 text-lg font-medium">component library</div>

        <div class="hidden gap-4 sm:flex">
          <Button variant="tertiary" as={A} href="/components">
            Components
          </Button>
          <Menu
            renderTrigger={(floatProps, { isOpen }) => (
              <Button variant="tertiary" active={isOpen()} {...floatProps}>
                Demos
              </Button>
            )}
          >
            <MenuButton as={A} href="/demos/music-app">
              Music App
            </MenuButton>
          </Menu>
        </div>
      </div>

      {/*right*/}
      <div class="flex items-center gap-4">
        <DarkModeToggle />
      </div>
    </div>
  );
};
