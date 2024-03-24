import { createSignal, For } from "solid-js";
import { Button, Icon, Input } from "@stem/components";
import { iconMap } from "../../../utils/icon-list";
import { size } from "@floating-ui/dom";

export const IconPage = () => {
  const [search, setSearch] = createSignal("");
  return (
    <div>
      <h1>Icon</h1>
      <Input
        value={search()}
        onInput={setSearch}
        class="mb-4"
        placeholder="Search"
      />
      <div>
        <For each={iconMap.filter((i) => i.includes(search()))}>
          {(item) => (
            <Button
              iconOnly={{ name: item as Icons, class: "size-6" }}
              variant="tertiary"
              size="lg"
            />
          )}
        </For>
      </div>
    </div>
  );
};
