import { Button } from "../../library";
import { Menu } from "../../library/menu/menu";
import { MenuButton } from "../../library/menu/menu-button";
import { Toggle } from "../../library/toggle/toggle";
import { createEffect, createSignal } from "solid-js";

export const DarkModeToggle = () => {
  const [mode, setMode] = createSignal<"light" | "dark">(
    localStorage.theme || "light",
  );

  createEffect(() => {
    localStorage.theme = mode();
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  return (
    <Menu
      renderTrigger={(floatProps, { isOpen }) => {
        return (
          <Button
            variant="tertiary"
            {...floatProps}
            active={isOpen()}
            iconOnly="gear-regular"
            style="margin-right: 600px"
          />
        );
      }}
    >
      <MenuButton>View Profile</MenuButton>
      <MenuButton>Settings</MenuButton>
      <MenuButton>Company profile</MenuButton>
    </Menu>
  );
};
