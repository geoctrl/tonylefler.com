import { ParentProps, mergeProps, createSignal, createEffect } from "solid-js";
import { Float, FloatContentOpts, FloatProps } from "../float/float";

export type MenuProps = ParentProps<
  Pick<FloatProps, "renderTrigger" | "placement" | "triggerHover">
>;

const defaultProps: Partial<MenuProps> = {};

export const Menu = (_props: MenuProps) => {
  const props = mergeProps(defaultProps, _props);
  let triggerRef: HTMLElement | undefined;
  let floatRef: HTMLElement | undefined;
  let floatOpts: FloatContentOpts | undefined;
  const [isOpen, setIsOpen] = createSignal(false);
  const [items, setItems] = createSignal<HTMLElement[]>([]);
  const [selectedIndex, setSelectedIndex] = createSignal<number | null>(null);

  function onKeyDown(e: KeyboardEvent) {
    if (e.code === "Tab" && isOpen()) {
      e.preventDefault();
      e.stopPropagation();
      floatOpts?.toggle();
    }
    if (e.code === "ArrowDown") {
      if (isOpen()) {
        e.preventDefault();
        e.stopPropagation();
        increment();
      } else if (document.activeElement === triggerRef) {
        console.log("selected");
        e.preventDefault();
        e.stopPropagation();
        setSelectedIndex(null);
        floatOpts?.toggle();
      }
    }
    if (e.code === "ArrowUp") {
      if (isOpen()) {
        e.preventDefault();
        e.stopPropagation();
        decrement();
      }
    }
  }

  function increment() {
    setSelectedIndex((prev) => {
      let next = 0;
      if (prev !== null) {
        next = Math.min(prev! + 1, items().length - 1);
      }
      items()[next]?.focus();
      return next;
    });
  }

  function decrement() {
    setSelectedIndex((prev) => {
      let next = 0;
      if (prev !== null) {
        next = Math.max(prev - 1, 0);
      }
      items()[next]?.focus();
      return next;
    });
  }

  function handleMouseOver(e: MouseEvent) {
    const item = e.target as HTMLElement;
    const index = items().findIndex((el) => el === item);
    if (index === -1) return;
    item.focus();
  }

  function handleMouseLeave(e: MouseEvent) {
    const item = e.target as HTMLElement;
    item.blur();
  }

  function handleToggle() {
    floatOpts?.toggle();
  }

  createEffect(() => {
    if (isOpen()) {
      items().forEach((item, i) => {
        item.addEventListener("mouseover", handleMouseOver);
        item.addEventListener("mouseleave", handleMouseLeave);
        item.addEventListener("click", handleToggle);
      });
    } else {
      items().forEach((item) => {
        item.removeEventListener("mouseover", handleMouseOver);
        item.removeEventListener("mouseleave", handleMouseLeave);
        item.removeEventListener("click", handleToggle);
      });
    }
  });

  return (
    <Float
      {...props}
      allowContentClicks
      onImperitiveHandle={(triggerEl, floatEl, opts) => {
        triggerRef = triggerEl;
        floatRef = floatEl;
        floatOpts = opts;
      }}
      onOpen={(contentRef) => {
        setIsOpen(true);
        setItems([...contentRef.querySelectorAll("button")]);
      }}
      onClose={() => {
        setIsOpen(false);
        setSelectedIndex(null);
        setItems([]);
      }}
      onKeyDown={onKeyDown}
      renderTrigger={props.renderTrigger}
      renderContent={() => <div class="p-1.5">{props.children}</div>}
    />
  );
};
