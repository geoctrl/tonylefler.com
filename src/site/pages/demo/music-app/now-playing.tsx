import { ParentProps, mergeProps, createSignal, createMemo } from "solid-js";
import { Button, Icon, Menu, MenuButton, RangeSlider } from "@stem/components";
import cover from "../../../assets/cover-art/echoes-of-the-void.png";
import { inlineSwitch } from "../../../../utils/inline-switch";
import { m } from "../../../../utils/classname-helpers";

type Props = ParentProps<{}>;

const defaultProps: Partial<Props> = {};

export const NowPlaying = (_props: Props) => {
  const props = mergeProps(defaultProps, _props);
  const [playing, setPlaying] = createSignal(false);
  const [shuffle, setShuffle] = createSignal(false);
  const [repeat, setRepeat] = createSignal("none");

  const repeatIcon = createMemo<Icons>(() => {
    return inlineSwitch(
      repeat(),
      {
        none: "repeat-solid",
        repeat: "repeat-solid",
        repeatOne: "repeat-1-solid",
      },
      "repeat-solid",
    );
  });

  return (
    <div class="flex h-full flex-col md:w-80">
      <div class="flex items-center justify-between p-4">
        <Button
          iconOnly={{ name: "angle-down-regular", class: "pt-0.5" }}
          variant="tertiary"
        />
        <div class="font-bold">Now Playing</div>
        <Menu
          renderTrigger={(floatProps) => (
            <Button
              iconOnly="ellipsis-regular"
              variant="tertiary"
              {...floatProps}
            />
          )}
        >
          <MenuButton>options go here</MenuButton>
        </Menu>
      </div>
      <div class="flex grow items-center justify-center px-4">
        <div class="max-h-[700px] max-w-[700px] overflow-hidden rounded-xl object-fill">
          <img src={cover} alt="" />
        </div>
      </div>
      <div class="flex flex-col gap-4 px-4">
        <div class="flex justify-between  align-bottom">
          <div>
            <div class="text-2xl">now i know</div>
            <div class="text-sm">Sarah Kang</div>
          </div>
          <div class="flex items-center gap-2">
            <Button iconOnly="thumbs-down-regular" variant="tertiary" />
            <Button iconOnly="thumbs-up-regular" variant="tertiary" />
          </div>
        </div>
        <div class="py-2">
          <RangeSlider value={50} size="sm" />
        </div>
        <div class="flex items-center justify-between gap-4">
          <Button
            iconOnly="shuffle-solid"
            variant="tertiary"
            onClick={() => setShuffle(!shuffle())}
            class={m(!shuffle(), "opacity-50")}
          />
          <div class="flex items-center justify-center gap-4">
            <Button
              iconOnly="backward-step-solid"
              class="h-12 w-12"
              variant="tertiary"
            />
            <Button
              iconOnly={{
                name: !playing() ? "play-solid" : "pause-solid",
                class: "size-6",
              }}
              class="h-16 w-16"
              variant="tertiary"
              onClick={() => setPlaying(!playing())}
            />
            <Button
              iconOnly="forward-step-solid"
              class="h-12 w-12"
              variant="tertiary"
            />
          </div>
          <Button
            iconOnly={repeatIcon()}
            variant="tertiary"
            class={m(repeat() === "none", "opacity-50")}
            onClick={() => {
              if (repeat() === "none") {
                setRepeat("repeat");
              } else if (repeat() === "repeat") {
                setRepeat("repeatOne");
                return "";
              } else {
                setRepeat("none");
              }
            }}
          />
        </div>
      </div>
      <div>lyrics</div>
    </div>
  );
};
