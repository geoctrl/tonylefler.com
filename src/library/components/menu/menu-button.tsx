import { Show, splitProps, JSX } from "solid-js";
import { Button, ButtonProps } from "../button/button";
import { Dynamic } from "solid-js/web";
import { MenuSub } from "./menu-sub";

export type MenuButtonProps = ConditionalOmit<
  ButtonProps,
  "iconLeft" | "iconRight" | "iconOnly"
> & {
  shortcut?: string;
  iconLeft?: Icons;
  iconRight?: Icons;
  subMenu?: JSX.Element;
};

const menuButtonRenderMap = {
  button: Button,
  child: MenuSub,
};

export const MenuButton = (props: MenuButtonProps) => {
  const [, buttonProps] = splitProps(props, [
    "shortcut",
    "children",
    "subMenu",
  ]);

  return (
    <Dynamic
      component={menuButtonRenderMap[props.subMenu ? "child" : "button"]}
      {...(buttonProps as ButtonProps)}
      iconLeft={buttonProps.iconLeft}
      iconRight={buttonProps.iconRight}
      variant="listItem"
      alignContent="left"
      block
      class="pl-3 pr-3"
      role="menuitem"
      subMenu={props.subMenu}
    >
      <div class="flex w-full items-center justify-between gap-8">
        {props.children}
        <Show when={props.shortcut}>
          <div class="text-sm font-normal text-grey-900">{props.shortcut}</div>
        </Show>
      </div>
    </Dynamic>
  );
};
