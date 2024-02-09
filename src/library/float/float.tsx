import {
  createEffect,
  createSignal,
  JSX,
  mergeProps,
  onCleanup,
  onMount,
  Show,
} from "solid-js";
import { Dynamic } from "solid-js/web";
import { computePosition, flip } from "@floating-ui/dom";
import anime from "animejs/lib/anime.es";

type Props = {
  renderTrigger: (
    floatProps: { ref: (el: HTMLElement) => void },
    something: { isOpen: boolean },
  ) => JSX.Element;
  renderContent: (something: { isOpen: boolean }) => JSX.Element;
};
const defaultProps: Partial<Props> = {};

export const Float = (_props: Props) => {
  let triggerRef: HTMLElement | undefined;
  let contentRef: HTMLElement | undefined;
  const [ready, setReady] = createSignal(false);
  const [isOpen, setIsOpen] = createSignal(false);

  function toggle(e: MouseEvent) {
    const nextIsOpen = !isOpen();
    setIsOpen(nextIsOpen);

    if (nextIsOpen) {
      document.addEventListener("click", onDocumentClick);

      const trigger = triggerRef as HTMLElement;
      const content = contentRef as HTMLElement;
      computePosition(trigger, content, {
        placement: "left",
        middleware: [flip()],
      }).then(({ x, y }) => {
        Object.assign(content.style, {
          left: `${x}px`,
          top: `${y}px`,
        });
      });
    } else {
      document.removeEventListener("click", onDocumentClick);
    }
  }

  function onDocumentClick(e: MouseEvent) {
    const target = e.target as Element;

    if (!triggerRef?.contains(target)) {
      setIsOpen(false);
    }
  }

  function setTriggerRef(el: HTMLElement) {
    triggerRef = el;
    if (triggerRef && contentRef) {
      setReady(true);
    }

    triggerRef.addEventListener("click", toggle);
  }

  function setContentRef(el: HTMLElement) {
    contentRef = el;
    if (triggerRef && contentRef) {
      setReady(true);
    }
  }

  onCleanup(() => {
    triggerRef?.removeEventListener("click", toggle);
  });

  const props = mergeProps(defaultProps, _props);
  return (
    <>
      <Dynamic
        component={() =>
          props.renderTrigger({ ref: setTriggerRef }, { isOpen: isOpen() })
        }
      />
      <Show when={isOpen()}>
        <div
          ref={(el) => setContentRef(el)}
          class="w-max absolute top-0 left-0 bg-grey-100 rounded-md px-4 dark:bg-raisin-100"
        >
          <Dynamic
            component={() => props.renderContent({ isOpen: isOpen() })}
          />
        </div>
      </Show>
    </>
  );
};
