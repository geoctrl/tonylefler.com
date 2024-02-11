import { mergeProps, ParentProps, Show, splitProps } from "solid-js";
import type { JSX } from "solid-js";
import { A, AnchorProps } from "@solidjs/router";
import { Dynamic } from "solid-js/web";
import { tv } from "tailwind-variants";

import { Icon, IconProps } from "../icon/icon";
import { inlineSwitch } from "../../utils/inline-switch";
import { css } from "../../utils/classname-helpers";

type ButtonBaseProps = ParentProps<{
  active?: boolean;
  alignContent?: "left" | "right" | "center";
  block?: boolean;
  disabled?: boolean;
  dropdown?: boolean;
  iconLeft?: Icons | IconProps;
  iconOnly?: Icons | IconProps;
  iconRight?: Icons | IconProps;
  size?: "sm" | "md" | "lg";
  variant?:
    | "primary"
    | "secondary"
    | "secondaryColor"
    | "border"
    | "tertiary"
    | "listItem";
}>;

type ButtonButtonProps = ButtonBaseProps &
  JSX.ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: undefined | "button";
  };

type ButtonAnchorProps = ButtonBaseProps &
  JSX.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as?: "a";
  };

type ButtonAProps = ButtonBaseProps &
  AnchorProps & {
    as?: typeof A;
  };

export type ButtonProps = ButtonButtonProps | ButtonAnchorProps | ButtonAProps;

const defaultProps: Partial<ButtonProps> = {
  variant: "secondary",
  alignContent: "center",
  size: "md",
  as: "button",
};

export const Button = (_props: ButtonProps) => {
  const props = mergeProps(defaultProps, _props);
  const [, buttonProps] = splitProps(props, [
    "active",
    "alignContent",
    "as",
    "block",
    "class",
    "dropdown",
    "iconLeft",
    "iconOnly",
    "iconRight",
    "size",
    "variant",
  ]);

  const size = inlineSwitch(
    props.size!,
    {
      sm: "size-4",
      md: "size-4",
      lg: "size-5",
    },
    "size-4",
  );

  const Wrapper = props.as || "button";

  return (
    <Dynamic
      component={Wrapper as any}
      {...buttonProps}
      class={buttonClasses({
        variant: props.variant,
        size: props.size,
        iconOnly: !!props.iconOnly,
        block: !!props.block,
        alignContent: props.alignContent,
        active: props.active,
        class: props.class,
      })}
    >
      <Show when={props.iconOnly}>
        <Icon
          name={
            typeof props?.iconOnly === "string"
              ? (props.iconOnly as Icons)
              : undefined
          }
          class={size}
          {...(typeof props?.iconOnly !== "string" ? props?.iconOnly : {})}
        />
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
    </Dynamic>
  );
};

const buttonClasses = tv({
  base: "inline-flex select-none items-center whitespace-nowrap rounded-lg align-middle font-medium transition ease-out cursor-pointer",
  variants: {
    variant: {
      primary:
        "bg-primary-500 text-grey-100 hover:bg-primary-600 active:bg-primary-700",
      secondary: css(
        "bg-raisin-500/10 hover:bg-raisin-500/20 active:bg-raisin-500/25",
        "dark:bg-grey-500/10 dark:text-grey-100 hover:dark:bg-grey-500/20 active:dark:bg-grey-500/25",
      ),
      secondaryColor:
        "bg-primary-500/10 text-primary-500 hover:bg-primary-500/20 active:bg-primary-500/25",
      border: css(
        "border border-solid border-grey-900/30 text-raisin-500 hover:border-grey-900/40 hover:bg-raisin-500/10 active:border-grey-900/50 active:bg-raisin-500/15",
        "dark:border-grey-100/50 dark:text-grey-100 dark:hover:bg-grey-500/10 dark:active:bg-grey-100/15",
      ),
      tertiary: css(
        "hover:bg-raisin-500/10 active:bg-raisin-500/15",
        "dark:text-grey-100 hover:dark:bg-grey-100/10 dark:active:bg-grey-100/15",
      ),
      listItem: css(
        "hover:bg-raisin-500/10 focus:bg-raisin-500/15 active:bg-raisin-500/15",
        "dark:text-grey-100 hover:dark:bg-grey-100/10 dark:focus:bg-grey-100/15 dark:active:bg-grey-100/15",
      ),
    },
    size: {
      sm: "gap-2 px-2.5 text-sm form-size-sm",
      md: "gap-3 px-4 text-base form-size-md",
      lg: "gap-4 px-5 text-lg form-size-lg",
    },
    alignContent: {
      left: "justify-start",
      right: "justify-end",
      center: "justify-center",
    },
    block: {
      true: "flex w-full",
    },
    active: {
      true: "",
    },
    disabled: {
      true: "",
    },
    iconOnly: {
      true: "px-0",
    },
  },
  compoundVariants: [
    // icon only width
    { size: "sm", iconOnly: true, class: "w-8" },
    { size: "md", iconOnly: true, class: "w-10" },
    { size: "lg", iconOnly: true, class: "w-12" },
    // active
    {
      variant: "primary",
      active: true,
      class: "bg-primary-700 hover:bg-primary-700",
    },
    {
      variant: "secondary",
      active: true,
      class: css(
        "bg-raisin-500/25 hover:bg-raisin-500/25",
        "dark:bg-grey-500/25 hover:dark:bg-grey-500/25",
      ),
    },
    {
      variant: "secondaryColor",
      active: true,
      class: "bg-primary-500/25 hover:bg-primary-500/25",
    },
    {
      variant: "border",
      active: true,
      class: css(
        "border-grey-900/50 hover:border-grey-900/50 bg-raisin-500/15 hover:bg-raisin-500/15",
        "dark:bg-grey-100/15 dark:hover:bg-grey-100/15",
      ),
    },
    {
      variant: "tertiary",
      active: true,
      class: css(
        "bg-raisin-500/15 hover:bg-raisin-500/15",
        "dark:bg-grey-100/15 dark:hover:bg-grey-100/15",
      ),
    },
  ],
});
