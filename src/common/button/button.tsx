import { mergeProps, ParentProps, Show, splitProps } from "solid-js";
import type { JSX } from "solid-js";
import { css, maybe } from "../../utils/classname-helpers";
import { Icon, IconProps } from "../icon/icon";
import { switchMap } from "../../utils/inline-switch";

type Props = ParentProps<{
  variant?: "primary" | "secondary" | "secondary-color" | "border" | "tertiary";
  iconLeft?: Icons | IconProps;
  iconRight?: Icons | IconProps;
  iconOnly?: Icons;
  dropdown?: boolean;
  block?: boolean;
  alignContent?: "left" | "right" | "center";
  size?: "sm" | "md" | "lg";
}> &
  JSX.ButtonHTMLAttributes<HTMLButtonElement>;

const defaultProps: Partial<Props> = {
  variant: "secondary",
  alignContent: "center",
  size: "md",
};

export const Button = (_props: Props) => {
  const props = mergeProps(defaultProps, _props);
  const [, buttonProps] = splitProps(props, [
    "class",
    "variant",
    "iconLeft",
    "iconRight",
    "iconOnly",
    "dropdown",
    "block",
    "alignContent",
    "size",
  ]);

  const size = switchMap(
    props.size!,
    {
      sm: "size-3",
      md: "size-4",
      lg: "size-5",
    },
    "size-4",
  );

  return (
    <button
      {...buttonProps}
      class={css(
        "inline-flex select-none items-center rounded-lg align-middle font-medium transition ease-out",
        props.class,
        maybe(props.size === "sm", "h-8 gap-1.5 px-2 text-sm"),
        maybe(props.size === "md", "h-10 gap-2 px-3 text-base"),
        maybe(props.size === "lg", "h-12 gap-2.5 px-4 text-lg"),
        maybe(
          props.variant === "primary",
          "bg-primary-500 text-grey-100 hover:bg-primary-600 active:bg-primary-700",
        ),
        maybe(
          props.variant === "secondary",
          "bg-raisin-500/10 hover:bg-raisin-500/20 active:bg-raisin-500/25",
          "dark:bg-grey-500/10 dark:text-grey-100 hover:dark:bg-grey-500/20 active:dark:bg-grey-500/25",
        ),
        maybe(
          props.variant === "secondary-color",
          "bg-primary-500/10 text-primary-500 hover:bg-primary-500/20 active:bg-primary-500/25",
        ),
        maybe(
          props.variant === "border",
          "border-2 border-solid border-grey-900/30 text-raisin-500 hover:border-grey-900/40 hover:bg-raisin-500/10 active:border-grey-900/50 active:bg-raisin-500/15",
          "dark:border-grey-100/50 dark:text-grey-100 dark:hover:bg-grey-500/10 dark:active:bg-grey-100/15",
        ),
        maybe(
          props.variant === "tertiary",
          "hover:bg-raisin-500/10 active:bg-raisin-500/15",
          "dark:text-grey-100 hover:dark:bg-grey-100/10 dark:active:bg-grey-100/15",
        ),
        maybe(props.block, "flex w-full"),
        maybe(props.alignContent === "left", "justify-start"),
        maybe(props.alignContent === "right", "justify-end"),
        maybe(props.alignContent === "center", "justify-center"),
        maybe(
          !!props.iconOnly,
          "px-0",
          maybe(props.size === "sm", "w-8"),
          maybe(props.size === "md", "w-10"),
          maybe(props.size === "lg", "w-12"),
        ),
      )}
    >
      <Show when={props.iconOnly}>
        <Icon name={props.iconOnly!} class={size} />
      </Show>
      <Show when={props.iconLeft && !props.iconOnly}>
        <Icon
          name={
            typeof props?.iconLeft === "string"
              ? (props.iconLeft as Icons)
              : undefined
          }
          class={size}
          {...(typeof props?.iconLeft !== "string" ? props?.iconLeft : {})}
        />
      </Show>
      <Show when={!props.iconOnly}>{props.children}</Show>
      <Show when={props.iconRight && !props.iconOnly}>
        <Icon
          name={
            typeof props?.iconRight === "string"
              ? (props.iconRight as Icons)
              : undefined
          }
          class={size}
          {...(typeof props?.iconRight !== "string" ? props?.iconRight : {})}
        />
      </Show>
      <Show when={props.dropdown && !props.iconOnly}>
        <Icon name="caret-down-solid" class={size} />
      </Show>
    </button>
  );
};
