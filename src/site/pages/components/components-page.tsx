import { ParentProps, mergeProps } from "solid-js";
import { AppHeader } from "../../components/app-header";
import { Float } from "../../../library/float/float";
import { Button } from "../../../library";
import { List } from "../../../library/list/list";
import { ListButton } from "../../../library/list/list-button";
import { ListDivider } from "../../../library/list/list-divider";
import { Menu } from "../../../library/menu/menu";
import { MenuButton } from "../../../library/menu/menu-button";

type Props = ParentProps<{}>;

const defaultProps: Partial<Props> = {};

export const ComponentsPage = (_props: Props) => {
  const props = mergeProps(defaultProps, _props);
  return (
    <>
      <AppHeader />
      {props.children}

      <div class="p-10">
        <Float
          renderTrigger={(floatProps, opts) => {
            return (
              <Button variant="primary" {...floatProps} active={opts.isOpen()}>
                trigger
              </Button>
            );
          }}
          renderContent={() => (
            <List>
              <ListButton shortcut="⌘K->P">View Profile</ListButton>
              <ListButton shortcut="⌘S">Settings</ListButton>
              <ListButton shortcut="?">Keyboard shortcuts</ListButton>
              <ListButton shortcut="⌘K->C">Company profile</ListButton>
              <ListButton shortcut="⌘K->T">Team</ListButton>
              <ListDivider />
              <ListButton shortcut="⌘I">Invite colleagues</ListButton>
            </List>
          )}
        />
        <Menu
          renderTrigger={(floatProps, { isOpen }) => (
            <Button active={isOpen()} {...floatProps}>
              hi
            </Button>
          )}
        >
          <MenuButton>One</MenuButton>
          <MenuButton>Two</MenuButton>
          <MenuButton>Three</MenuButton>
        </Menu>
      </div>
    </>
  );
};
