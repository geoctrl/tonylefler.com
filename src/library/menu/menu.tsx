import {
  Accessor,
  ParentProps,
  mergeProps,
  JSX,
  onMount,
  onCleanup,
  createEffect,
  createSignal,
} from "solid-js";
import { Float } from "../float/float";

type Props = ParentProps<{
  renderTrigger: (
    floatProps: {
      ref: (el: HTMLElement) => void;
    },
    opts: { isOpen: Accessor<boolean> },
  ) => JSX.Element;
}>;

const defaultProps: Partial<Props> = {};

export const Menu = (_props: Props) => {
  const props = mergeProps(defaultProps, _props);
  let floatRef: HTMLDivElement | undefined;
  const [isOpen, setIsOpen] = createSignal(false);
  const [items, setItems] = createSignal<HTMLElement[]>([]);
  const [selectedIndex, setSelectedIndex] = createSignal<number | null>(null);

  function onPassRef(el: HTMLDivElement) {
    floatRef = el;
  }

  function onKeyDown(e: KeyboardEvent) {
    if (isOpen()) {
      if (e.code === "ArrowDown") {
        e.preventDefault();
        e.stopPropagation();
        increment();
      }
      if (e.code === "ArrowUp") {
        e.preventDefault();
        e.stopPropagation();
        decrement();
      }
    }
  }

  function increment() {
    setSelectedIndex((prev) => {
      if (prev === null) return 0;
      const next = Math.min(prev + 1, items().length - 1);
      items()[next].focus();
      return next;
    });
  }

  function decrement() {
    setSelectedIndex((prev) => {
      if (prev === null) return 0;
      const next = Math.max(prev - 1, 0);
      items()[next].focus();
      return next;
    });
  }

  function onOpen(contentRef: HTMLDivElement) {
    setIsOpen(true);
    setItems([...contentRef.querySelectorAll("button")]);
  }
  function onClose() {
    setIsOpen(false);
  }

  return (
    <Float
      passRef={onPassRef}
      onOpen={onOpen}
      onClose={onClose}
      onKeyDown={onKeyDown}
      renderTrigger={props.renderTrigger}
      renderContent={() => <div class="py-1.5">{props.children}</div>}
    />
  );
};
