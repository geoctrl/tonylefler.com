import { Component } from "solid-js";
import { Button } from "./common/button";
import { ButtonPage } from "./library/button";
import { DarkModeToggle } from "./components/dark-mode-toggle";

export const Root: Component = () => {
  return (
    <div class="p-4">
      <div>
        <DarkModeToggle />
      </div>
      <ButtonPage />
    </div>
  );
};
