import { ParentProps, mergeProps } from "solid-js";

import { Button } from "@stem/components";
import { DarkModeToggle } from "../../components/dark-mode-toggle";

type Props = ParentProps<{}>;

const defaultProps: Partial<Props> = {};

export const MusicApp = (_props: Props) => {
  const props = mergeProps(defaultProps, _props);
  return (
    <div class="flex h-screen gap-4 p-6">
      <div class="grow">
        <div class="flex items-center justify-between">
          <div>
            logo <DarkModeToggle />
          </div>
          <div class="flex grow justify-center gap-4">
            <Button size="sm" variant="tertiary">
              Rankings
            </Button>
            <Button
              size="sm"
              variant="tertiary"
              active
              iconRight="xmark-regular"
            >
              Browse
            </Button>
            <Button size="sm" variant="tertiary">
              For You
            </Button>
            <Button size="sm" variant="tertiary">
              My Library
            </Button>
            <Button
              size="sm"
              variant="tertiary"
              iconOnly="magnifying-glass-regular"
            />
          </div>
        </div>
      </div>
      <div class="w-112 rounded-3xl bg-grey-200 dark:bg-raisin-400">right</div>
    </div>
  );
};
