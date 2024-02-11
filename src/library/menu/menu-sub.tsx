import { mergeProps, splitProps, JSX } from "solid-js";
import { MenuButton, MenuButtonProps } from "./menu-button";
import { Menu } from "./menu";

export type MenuSubProps = MenuButtonProps;

const defaultProps: Partial<MenuSubProps> = {};

export const MenuSub = (_props: MenuSubProps) => {
  const props = mergeProps(defaultProps, _props);
  const [, menuButtonProps] = splitProps(props, ["children", "subMenu"]);
  return (
    <Menu
      triggerHover
      placement="right-start"
      renderTrigger={(floatProps, { isOpen }) => {
        return (
          <MenuButton {...floatProps} {...menuButtonProps} active={isOpen()}>
            {props.children}
          </MenuButton>
        );
      }}
    >
      {props.subMenu}
    </Menu>
  );
};
