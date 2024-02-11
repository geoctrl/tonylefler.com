import { Show, splitProps } from "solid-js";
import { Button, ButtonProps } from "../button/button";

export type MenuButtonProps = Omit<
  ButtonProps,
  "iconLeft" | "iconRight" | "iconOnly"
> & {
  shortcut?: string;
  iconLeft?: Icons;
  iconRight?: Icons;
};

export const MenuButton = (props: MenuButtonProps) => {
  const [, buttonProps] = splitProps(props, ["shortcut"]);
  return (
    <div class="px-1.5">
      <Button
        {...(buttonProps as ButtonProps)}
        iconLeft={props.iconLeft}
        iconRight={props.iconRight}
        variant="listItem"
        alignContent="left"
        block
        class="pl-3 pr-3"
        role="menuitem"
      >
        <div class="flex w-full items-center justify-between gap-8">
          {props.children}
          <Show when={props.shortcut}>
            <div class="text-sm font-normal text-grey-900">
              {props.shortcut}
            </div>
          </Show>
        </div>
      </Button>
    </div>
  );
};
