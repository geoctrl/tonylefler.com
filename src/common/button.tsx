import { mergeProps, ParentProps, Show, splitProps } from "solid-js";
import type { JSX } from "solid-js";
import { always, css, maybe } from "../utils/classname-helpers";
import { Icon } from "./icon";

type Props = ParentProps<{
  ref?: HTMLButtonElement | undefined;
  variant?: "primary" | "secondary" | "secondary-color" | "border" | "tertiary";
  iconLeft?: Icons;
  iconRight?: Icons;
  iconOnly?: Icons;
  dropdown?: boolean;
}> &
  JSX.ButtonHTMLAttributes<HTMLButtonElement>;

const defaultProps: Partial<Props> = {
  variant: "primary",
};

export const Button = (_props: Props) => {
  const props = mergeProps(defaultProps, _props);
  const [, buttonProps] = splitProps(props, [
    "class",
    "variant",
    "iconOnly",
    "iconLeft",
    "iconRight",
    "dropdown",
  ]);
  return (
    <button
      {...buttonProps}
      class={css(
        always(
          "inline-flex h-10 select-none items-center rounded-lg px-3 font-medium transition ease-out",
        ),
        maybe(
          props.variant === "primary",
          "bg-crayola-500 text-grey-100 hover:bg-crayola-600 active:bg-crayola-700",
        ),
        maybe(
          props.variant === "secondary",
          "bg-grey-900/20 hover:bg-grey-900/30 active:bg-grey-900/35",
          "dark:text-grey-100",
        ),
        maybe(
          props.variant === "secondary-color",
          "bg-crayola-500/10 text-crayola-500 hover:bg-crayola-500/20 active:bg-crayola-500/25",
        ),
        maybe(
          props.variant === "border",
          "hover:bg-gray-500/10 active:bg-gray-500/15 border-2 border-solid border-grey-900/30 text-raisin-500 hover:border-grey-900/40 hover:bg-raisin-500/5 active:border-grey-900/50 active:bg-raisin-500/10",
          "dark:border-grey-100/50 dark:text-grey-100 dark:hover:bg-grey-500/10 dark:active:bg-grey-100/15",
        ),
        maybe(
          props.variant === "tertiary",
          "hover:bg-raisin-500/5 active:bg-raisin-500/10",
          "dark:text-grey-100 hover:dark:bg-grey-100/10 dark:active:bg-grey-100/15",
        ),
      )}
    >
      <Show when={props.iconLeft || props.iconOnly}>
        <Icon name="arrow-left-regular" size={16} />
      </Show>
      <Show when={!props.iconOnly}>
        <span>{props.children}</span>
      </Show>
      <Show when={props.iconRight || props.dropdown}>
        <Icon
          class="ml-2"
          name={props.iconRight || "caret-down-solid"}
          size={16}
        />
      </Show>
    </button>
  );
};
