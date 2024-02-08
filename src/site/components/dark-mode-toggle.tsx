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
    <Toggle
      checked={mode() === "dark"}
      onChange={(checked) => setMode(checked ? "dark" : "light")}
    />
  );
};
