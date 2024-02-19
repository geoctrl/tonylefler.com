import { createEffect, createSignal } from "solid-js";
import { Menu, Button, MenuButton } from "../../library/components";
import { inlineSwitch } from "../../utils/inline-switch";

export const DarkModeToggle = () => {
  const [mode, setMode] = createSignal<"light" | "dark" | "default">(
    localStorage.theme || "default",
  );

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", ({ matches }) => {
      if (mode() === "default") {
        if (matches) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    });

  createEffect(() => {
    localStorage.theme = mode();
    if (
      mode() === "dark" ||
      (mode() === "default" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  return (
    <Menu
      placement="bottom-end"
      renderTrigger={(floatProps, { isOpen }) => {
        return (
          <Button
            variant="tertiary"
            {...floatProps}
            active={isOpen()}
            iconOnly={inlineSwitch(mode(), {
              default: "circle-half-stroke-regular",
              dark: "moon-regular",
              light: "sun-regular",
            })}
          />
        );
      }}
    >
      <MenuButton
        onClick={() => {
          setMode("default");
        }}
      >
        System Default
      </MenuButton>
      <MenuButton
        onClick={() => {
          setMode("light");
        }}
      >
        Light
      </MenuButton>
      <MenuButton
        onClick={() => {
          setMode("dark");
        }}
      >
        Dark
      </MenuButton>
    </Menu>
  );
};
