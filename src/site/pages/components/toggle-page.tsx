import { ParentProps, mergeProps, createSignal } from "solid-js";
import { Toggle } from "@stem/components";

type Props = ParentProps<{}>;

const defaultProps: Partial<Props> = {};

export const TogglePage = (_props: Props) => {
  const props = mergeProps(defaultProps, _props);
  const [small, setSmall] = createSignal(false);
  const [medium, setMedium] = createSignal(false);
  const [large, setLarge] = createSignal(false);
  return (
    <div class="mb-8">
      <h1>Toggles</h1>
      <div class="flex gap-2">
        <Toggle checked={small()} onChange={setSmall} size="sm" />
        <Toggle checked={medium()} onChange={setMedium} size="md" />
        <Toggle checked={large()} onChange={setLarge} size="lg" />
      </div>
    </div>
  );
};
