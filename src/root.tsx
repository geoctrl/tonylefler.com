import { Component } from "solid-js";
import { ButtonPage } from "./library/button-page";
import { DarkModeToggle } from "./components/dark-mode-toggle";
import { TogglePage } from "./library/toggle-page";

export const Root: Component = () => {
  return (
    <div class="p-4">
      <div>
        <DarkModeToggle />
      </div>
      <TogglePage />
      <ButtonPage />
    </div>
  );
};
