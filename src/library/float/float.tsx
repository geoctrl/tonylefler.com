import {
  Accessor,
  createEffect,
  createSignal,
  JSX,
  mergeProps,
  onCleanup,
  Show,
} from "solid-js";
import { Dynamic } from "solid-js/web";
import { computePosition, flip, offset, Placement } from "@floating-ui/dom";
import anime from "animejs/lib/anime.es";
import { css } from "../../utils/classname-helpers";

type Props = {
  renderTrigger: (
    floatProps: {
      ref: (el: HTMLElement) => void;
    },
    opts: { isOpen: Accessor<boolean> },
  ) => JSX.Element;
  renderContent: (opts: { isOpen: Accessor<boolean> }) => JSX.Element;
  placement?: Placement;
  allowContentClicks?: boolean;
  passRef?: (el: HTMLDivElement) => void;
  onOpen?: (contentRef: HTMLDivElement) => void;
  onClose?: () => void;
  onKeyDown?: (e: KeyboardEvent) => void;
};
const defaultProps: Partial<Props> = {};

export const Float = (_props: Props) => {
  let triggerRef: HTMLElement | undefined;
  let contentRef: HTMLElement | undefined;
  const [isOpen, setIsOpen] = createSignal(false);
  document.addEventListener("keydown", onKeyDown);

  createEffect(() => {
    if (isOpen()) {
      props.onOpen?.(contentRef as HTMLDivElement);
    } else {
      props.onClose?.();
      triggerRef?.focus();
    }
  });

  onCleanup(() => {
    triggerRef?.removeEventListener("click", toggle);
    document.removeEventListener("keydown", onKeyDown);
  });

  function roundByDPR(value: number) {
    const dpr = window.devicePixelRatio || 1;
    return Math.round(value * dpr) / dpr;
  }

  function toggle(e: MouseEvent) {
    const nextIsOpen = !isOpen();
    setIsOpen(nextIsOpen);

    if (nextIsOpen) {
      document.addEventListener("click", onDocumentClick);

      const trigger = triggerRef as HTMLElement;
      const content = contentRef as HTMLElement;
      computePosition(trigger, content, {
        placement: props.placement || "bottom-start",
        middleware: [flip(), offset(6)],
      }).then(({ x, y }) => {
        anime({
          targets: contentRef,
          opacity: [0, 1],
          easing: "easeOutSine",
          scale: [0.8, 1],
          translateY: [-20, 0],
          duration: 150,
          top: [y, y],
          left: [x, x],
        });

        Object.assign(content.style, {
          transform: `translate(${roundByDPR(x)}px,${roundByDPR(y)}px)`,
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
    triggerRef.addEventListener("click", toggle);
  }

  function setContentRef(el: HTMLElement) {
    contentRef = el;
    if (props.passRef) props.passRef(el as HTMLDivElement);
  }

  const props = mergeProps(defaultProps, _props);

  return (
    <>
      <Dynamic
        component={() =>
          props.renderTrigger({ ref: setTriggerRef }, { isOpen })
        }
      />
      <Show when={isOpen()}>
        <div
          ref={(el) => setContentRef(el)}
          class={css(
            "app-border absolute left-0 top-0 w-max rounded-xl border bg-grey-100 shadow-lg",
            "dark:bg-raisin-400",
          )}
        >
          <Dynamic component={() => props.renderContent({ isOpen })} />
        </div>
      </Show>
    </>
  );
};
