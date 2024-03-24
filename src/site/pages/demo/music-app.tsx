import { Button, Icon, Menu, MenuButton, RangeSlider } from "@stem/components";
import cover from "../../assets/cover-art/echoes-of-the-void.png";

export const MusicApp = () => {
  return (
    <div class="flex h-full flex-col">
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
          <RangeSlider progress={50} size="sm" />
        </div>
        <div class="flex items-center justify-center gap-4">
          <Button
            iconOnly="backward-step-solid"
            class="h-12 w-12 rounded-full"
            variant="tertiary"
          />
          <Button
            iconOnly={{ name: "play-solid", class: "size-6" }}
            class="h-16 w-16 rounded-full"
            variant="tertiary"
          />
          <Button
            iconOnly="forward-step-solid"
            class="h-12 w-12 rounded-full"
            variant="tertiary"
          />
        </div>
      </div>
      <div>lyrics</div>
    </div>
  );
};
