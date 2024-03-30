import {
  ParentProps,
  mergeProps,
  onMount,
  onCleanup,
  createEffect,
} from "solid-js";

import { a } from "../../../utils/classname-helpers";
import { inlineSwitch } from "../../../utils/inline-switch";

type Props = ParentProps<{
  value: number;
  size?: "sm" | "md" | "lg";
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
  snap?: boolean;
}>;

const defaultProps: Partial<Props> = {
  value: 0,
  size: "md",
  min: 0,
  max: 100,
};

const handleWidth = 20;

export const RangeSlider = (_props: Props) => {
  const props = mergeProps(defaultProps, _props);
  let trackValue = props.value;

  let handleEl: HTMLDivElement | undefined = undefined;
  let containerEl: HTMLDivElement | undefined = undefined;
  let trackEl: HTMLDivElement | undefined = undefined;

  function moveHandle(e: Event) {
    if (handleEl && containerEl && trackEl) {
      let clientX;
      if ((e as MouseEvent).clientX) {
        clientX = (e as MouseEvent).clientX;
      } else if ((e as TouchEvent).touches?.length === 1) {
        clientX = (e as TouchEvent).touches[0]?.clientX;
      }
      if (!clientX) return;
      const sliderRect = containerEl.getBoundingClientRect();
      let newX = clientX - sliderRect.left - handleWidth / 2;
      if (props.snap) {
        const totalSteps = props.max! - props.min!;
        const stepWidth = (sliderRect.width - handleWidth) / totalSteps;
        const nearestStep = Math.round(newX / stepWidth);
        newX = nearestStep * stepWidth;
      }
      update(newX, sliderRect);
    }
  }

  function stateChange(firstLoad: boolean = false) {
    if (containerEl) {
      const sliderRect = containerEl.getBoundingClientRect();
      const width = sliderRect.width - handleWidth;
      const x =
        ((props.value - props.min!) * width) / (props.max! - props.min!);
      update(x, sliderRect, firstLoad);
    }
  }

  function update(x: number, containerRect?: DOMRect, firstLoad?: boolean) {
    if (containerEl && handleEl && trackEl) {
      const sliderRect = containerRect || containerEl.getBoundingClientRect();

      if (x < 0) {
        x = 0;
      } else if (x > sliderRect.width - handleWidth) {
        x = sliderRect.width - handleWidth;
      }

      const percentage = x / (sliderRect.width - handleWidth);
      const percentageTrack = (x + handleWidth / 2) / sliderRect.width;
      const displayPercentage = percentage * 100;
      const displayPercentageTrack = percentageTrack * 100;
      const nextValue = Math.round(
        props.min! + (displayPercentage / 100) * (props.max! - props.min!),
      );

      handleEl.style.left = `${displayPercentage}%`;
      trackEl.style.width = `${displayPercentageTrack}%`;
      trackValue = nextValue;
      if (!firstLoad && props.value !== nextValue) {
        props.onChange?.(nextValue);
      }
    }
  }

  createEffect(() => {
    if (props.value !== trackValue) {
      stateChange();
    }
  });

  function onMouseUp() {
    document.removeEventListener("mousemove", moveHandle);
    document.removeEventListener("mouseup", onMouseUp);
  }

  function onTouchEnd() {
    document.removeEventListener("touchmove", moveHandle);
    document.removeEventListener("touchend", onTouchEnd);
  }

  function mouseDown(e: Event) {
    e.preventDefault();
    moveHandle(e);
    document.addEventListener("mousemove", moveHandle);
    document.addEventListener("mouseup", onMouseUp);
  }

  function touchStart(e: Event) {
    e.preventDefault();
    document.addEventListener("touchmove", moveHandle);
    document.addEventListener("touchend", onTouchEnd);
  }

  function onKeyPress(e: KeyboardEvent) {
    if (containerEl?.contains(document.activeElement)) {
      if (
        (e.key === "ArrowRight" || e.key === "ArrowUp") &&
        props.value < props.max!
      ) {
        props.onChange?.(props.value + 1);
      } else if (
        (e.key === "ArrowLeft" || e.key === "ArrowDown") &&
        props.value > props.min!
      ) {
        props.onChange?.(props.value - 1);
      }
    }
  }

  onMount(() => {
    if (containerEl && handleEl && trackEl) {
      stateChange(true);
      handleEl.addEventListener("mousedown", mouseDown);
      handleEl.addEventListener("touchstart", mouseDown);
      containerEl.addEventListener("mousedown", mouseDown);
      containerEl.addEventListener("touchstart", touchStart);
      containerEl.addEventListener("keydown", onKeyPress);
    }
  });

  onCleanup(() => {
    if (containerEl && handleEl) {
      handleEl.removeEventListener("mousedown", mouseDown);
      handleEl.removeEventListener("touchstart", mouseDown);
      containerEl.removeEventListener("mousedown", mouseDown);
      containerEl.removeEventListener("touchstart", touchStart);
      containerEl.removeEventListener("keydown", onKeyPress);
    }
  });

  const trackHeight = inlineSwitch(
    props.size!,
    {
      sm: "h-1",
      md: "h-2",
      lg: "h-3",
    },
    "md",
  );

  const trackOffset = inlineSwitch(
    props.size!,
    {
      sm: "top-2",
      md: "top-1.5",
      lg: "top-1",
    },
    "md",
  );

  return (
    <div class="relative h-5 cursor-pointer" ref={containerEl} tabindex={0}>
      <div class="absolute left-0 right-5 z-10">
        <div
          ref={handleEl}
          class={a(
            "absolute size-5 rounded-full border-2 border-grey-100 bg-primary-500",
            "dark:bg-grey-100",
          )}
          style={{ left: "100%" }}
        />
      </div>
      <div
        class={a(
          trackHeight,
          trackOffset,
          "relative rounded-l-full rounded-r-full bg-grey-500",
          "dark:bg-raisin-100",
        )}
      >
        <div
          ref={trackEl}
          class={a(
            trackHeight,
            "absolute left-0 rounded-l-full rounded-r-full bg-primary-500",
          )}
        />
      </div>
    </div>
  );
};
