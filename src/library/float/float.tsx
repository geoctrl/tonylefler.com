import {
  Accessor,
  createEffect,
  createSignal,
  JSX,
  mergeProps,
  onCleanup,
  Show,
} from "solid-js";
import { Dynamic, Portal } from "solid-js/web";
import { computePosition, flip, offset, Placement } from "@floating-ui/dom";
import anime from "animejs/lib/anime.es";
import { css } from "../../utils/classname-helpers";

export type FloatContentOpts = { toggle: () => void };

export type FloatProps = {
  allowContentClicks?: boolean;
  placement?: Placement;
  onClose?: () => void;
  onImperitiveHandle?: (
    triggerEl: HTMLElement | undefined,
    floatEl: HTMLElement | undefined,
    opts: FloatContentOpts,
  ) => void;
  onKeyDown?: (e: KeyboardEvent) => void;
  onOpen?: (contentRef: HTMLDivElement) => void;
  onToggle?: (isOpen: boolean) => void;
  renderContent: (opts: { isOpen: Accessor<boolean> }) => JSX.Element;
  renderTrigger: (
    floatProps: {
      ref: (el: HTMLElement) => void;
    },
    opts: { isOpen: Accessor<boolean> },
  ) => JSX.Element;
  triggerHover?: boolean;
};
const defaultProps: Partial<FloatProps> = {};

export const Float = (_props: FloatProps) => {
  const props = mergeProps(defaultProps, _props);
  let triggerRef: HTMLElement | undefined;
  let contentRef: HTMLElement | undefined;
  const [isOpen, setIsOpen] = createSignal(false);
  document.addEventListener("keydown", onKeyDown);
  props.onImperitiveHandle?.(triggerRef, contentRef, { toggle });

  createEffect(() => {
    if (isOpen()) {
      props.onOpen?.(contentRef as HTMLDivElement);
      props.onToggle?.(true);
    } else {
      props.onClose?.();
      triggerRef?.focus();
      props.onToggle?.(false);
    }
  });

  onCleanup(() => {
    if (props.triggerHover) {
      triggerRef?.removeEventListener("mouseenter", toggle);
    } else {
      triggerRef?.removeEventListener("click", toggle);
    }
    document.removeEventListener("keydown", onKeyDown);
  });

  function roundByDPR(value: number) {
    const dpr = window.devicePixelRatio || 1;
    return Math.round(value * dpr) / dpr;
  }

  function toggle() {
    const nextIsOpen = !isOpen();
    setIsOpen(nextIsOpen);

    if (nextIsOpen) {
      document.addEventListener("click", onDocumentClick);

      const trigger = triggerRef as HTMLElement;
      const content = contentRef as HTMLElement;
      computePosition(trigger, content, {
        placement: props.placement || "bottom-start",
        middleware: [
          flip(),
          offset({
            mainAxis: props.triggerHover ? 12 : 7,
            alignmentAxis: props.triggerHover ? -7 : 0,
          }),
        ],
      }).then(({ x, y, ...rest }) => {
        const actualX = roundByDPR(x);
        const actualY = roundByDPR(y);
        anime({
          targets: contentRef,
          opacity: [0, 1],
          easing: "easeOutSine",
          scale: [0.8, 1],
          translateX: [actualX, actualX],
          translateY: [actualY, actualY],
          duration: 10000,
        });
      });
    } else {
      document.removeEventListener("click", onDocumentClick);
    }
  }

  function onDocumentClick(e: MouseEvent) {
    const target = e.target as Element;

    const isContentClick =
      props.allowContentClicks && contentRef?.contains(target);

    if (!triggerRef?.contains(target) && !isContentClick) {
      setIsOpen(false);
    }
  }

  function onKeyDown(e: KeyboardEvent) {
    props.onKeyDown?.(e);
    if (e.code === "Escape" && isOpen()) {
      setIsOpen(false);
    }
  }

  function setTriggerRef(el: HTMLElement) {
    triggerRef = el;
    if (props.triggerHover) {
      triggerRef.addEventListener("mouseover", toggle);
    } else {
      triggerRef.addEventListener("click", toggle);
    }
    props.onImperitiveHandle?.(triggerRef, contentRef as HTMLDivElement, {
      toggle,
    });
  }

  function setContentRef(el: HTMLElement) {
    contentRef = el;
    props.onImperitiveHandle?.(triggerRef, contentRef as HTMLDivElement, {
      toggle,
    });
  }

  return (
    <>
      <Dynamic
        component={() =>
          props.renderTrigger({ ref: setTriggerRef }, { isOpen })
        }
      />
      <Show when={isOpen()}>
        <Portal>
          <div
            ref={(el) => setContentRef(el)}
            class={css(
              "app-border absolute left-0 top-0 w-max rounded-xl border bg-grey-100 shadow-lg",
              "dark:bg-raisin-400",
            )}
          >
            <Dynamic component={() => props.renderContent({ isOpen })} />
          </div>
        </Portal>
      </Show>
    </>
  );
};
