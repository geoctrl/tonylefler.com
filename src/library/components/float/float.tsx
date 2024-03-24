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
import { always, maybe } from "../../../utils/classname-helpers";

export type FloatContentOpts = { toggle: () => void };

export type FloatProps = {
  allowContentClicks?: boolean;
  backdrop?: boolean;
  coverTrigger?: boolean;
  placement?: Placement;
  onClose?: () => void;
  onImperativeHandle?: (
    triggerEl: HTMLElement | undefined,
    floatEl: HTMLElement | undefined,
    opts: FloatContentOpts,
  ) => void;
  onKeyDown?: (e: KeyboardEvent) => void;
  onOpen?: (contentRef: HTMLDivElement) => void;
  onToggle?: (isOpen: boolean) => void;
  renderContent: (opts: {
    isOpen: Accessor<boolean>;
    close: () => void;
  }) => JSX.Element;
  renderTrigger: (
    floatProps: {
      ref: (el: HTMLElement) => void;
    },
    opts: {
      isOpen: Accessor<boolean>;
      open: () => void;
      toggle: () => void;
      close: () => void;
    },
  ) => JSX.Element;
  triggerHover?: boolean;
};
const defaultProps: Partial<FloatProps> = {};

export const Float = (_props: FloatProps) => {
  const props = mergeProps(defaultProps, _props);
  let triggerRef: HTMLElement | undefined;
  let contentRef: HTMLElement | undefined;
  let backdropRef: HTMLDivElement | undefined;
  const [isOpen, setIsOpen] = createSignal(false);
  document.addEventListener("keydown", onKeyDown);
  props.onImperativeHandle?.(triggerRef, contentRef, { toggle });

  let init = true;

  createEffect(() => {
    if (isOpen()) {
      props.onOpen?.(contentRef as HTMLDivElement);
      props.onToggle?.(true);
    } else if (!init) {
      props.onClose?.();
      props.onToggle?.(false);
    }
    init = false;
  });

  onCleanup(() => {
    if (props.triggerHover) {
      triggerRef?.removeEventListener("mouseenter", toggle);
    } else {
      triggerRef?.removeEventListener("click", toggle);
    }
    document.removeEventListener("keydown", onKeyDown);
  });

  function maybeRefocusTrigger() {
    const focusedElement = document.activeElement;
    if (triggerRef !== focusedElement && contentRef?.contains(focusedElement)) {
      triggerRef?.focus();
    }
  }

  function open() {
    setIsOpen(true);
    document.addEventListener("click", onDocumentClick);

    const trigger = triggerRef as HTMLElement;
    const content = contentRef as HTMLElement;
    computePosition(trigger, content, {
      placement: props.placement || "bottom-start",
      middleware: [
        flip(),
        offset(
          props.coverTrigger && triggerRef
            ? -triggerRef.getBoundingClientRect().height
            : 7,
        ),
      ],
    }).then(({ x, y }) => {
      anime({
        targets: contentRef,
        opacity: [0, 1],
        easing: "easeOutSine",
        scale: [0.8, 1],
        duration: 150,
      });

      if (props.backdrop) {
        anime({
          targets: backdropRef,
          opacity: [0, 1],
          easing: "easeOutSine",
          duration: 150,
        });
      }

      Object.assign(content.style, {
        top: `${y}px`,
        left: `${x}px`,
      });
    });
  }

  function close() {
    maybeRefocusTrigger();
    setIsOpen(false);
    document.removeEventListener("click", onDocumentClick);
  }

  function toggle() {
    if (!isOpen()) {
      open();
    } else {
      close();
    }
  }

  function onDocumentClick(e: MouseEvent) {
    const target = e.target as Element;

    const isContentClick =
      props.allowContentClicks && contentRef?.contains(target);

    if (!triggerRef?.contains(target) && !isContentClick) {
      toggle();
    }
  }

  function onKeyDown(e: KeyboardEvent) {
    props.onKeyDown?.(e);
    if (e.code === "Escape" && isOpen()) {
      toggle();
    }
  }

  function setTriggerRef(el: HTMLElement) {
    triggerRef = el;
    if (props.triggerHover) {
      triggerRef.addEventListener("mouseover", toggle);
    } else {
      triggerRef.addEventListener("click", toggle);
    }
    props.onImperativeHandle?.(triggerRef, contentRef as HTMLDivElement, {
      toggle,
    });
  }

  function setContentRef(el: HTMLElement) {
    contentRef = el;
    props.onImperativeHandle?.(triggerRef, contentRef as HTMLDivElement, {
      toggle,
    });
  }

  return (
    <>
      <Dynamic
        component={() =>
          props.renderTrigger(
            { ref: setTriggerRef },
            { isOpen, close, open, toggle },
          )
        }
      />
      <Show when={isOpen()}>
        <Portal>
          <Show when={props.backdrop}>
            <div
              class="fixed inset-0 z-0 bg-raisin-500/50 opacity-0"
              ref={backdropRef}
            />
          </Show>
          <div
            ref={(el) => setContentRef(el)}
            class={always(
              "absolute left-0 top-0 w-max rounded-xl bg-grey-100 shadow-lg",
              "dark:bg-raisin-400",
              maybe(!props.backdrop, "border app-border"),
            )}
          >
            <Dynamic component={() => props.renderContent({ isOpen, close })} />
          </div>
        </Portal>
      </Show>
    </>
  );
};
