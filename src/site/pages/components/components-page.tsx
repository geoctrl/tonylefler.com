import { ParentProps, mergeProps, onMount } from "solid-js";
import { AppHeader } from "../../components/app-header";
import { Float } from "../../../library/float/float";
import { Button } from "../../../library";
import { List } from "../../../library/list/list";
import { ListButton } from "../../../library/list/list-button";
import { ListDivider } from "../../../library/list/list-divider";
import { Menu } from "../../../library/menu/menu";
import { MenuButton } from "../../../library/menu/menu-button";
import { MenuDivider } from "../../../library/menu/menu-divider";

type Props = ParentProps<{}>;

const defaultProps: Partial<Props> = {};

export const ComponentsPage = (_props: Props) => {
  const props = mergeProps(defaultProps, _props);
  return (
    <>
      <AppHeader />
      {props.children}

      <div class="p-10">
        <Menu
          renderTrigger={(floatProps, { isOpen }) => {
            return (
              <Button
                variant="tertiary"
                {...floatProps}
                active={isOpen()}
                iconOnly="gear-regular"
              />
            );
          }}
        >
          <MenuButton shortcut="⌘K->P">View Profile</MenuButton>
          <MenuButton shortcut="⌘S">Settings</MenuButton>
          <MenuButton shortcut="⌘K->C">Company profile</MenuButton>
          <MenuButton shortcut="⌘K->T">Team</MenuButton>
          <MenuDivider />
          <MenuButton shortcut="⌘I">Invite colleagues</MenuButton>
        </Menu>
      </div>
    </>
  );
};
