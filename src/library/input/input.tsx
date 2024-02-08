import { ParentProps, mergeProps, splitProps } from "solid-js";
import type { JSX } from "solid-js";
import { css, maybe } from "../../utils/classname-helpers";
import { Label } from "../label/label";
import { ulid } from "ulid";

type Props = JSX.InputHTMLAttributes<HTMLInputElement> &
  ParentProps<{
    value?: string;
    onInput?: (
      value: string,
      event: Event & {
        currentTarget: HTMLInputElement;
        target: HTMLInputElement;
      },
    ) => void;
    size?: "sm" | "md" | "lg";
    label?: string | JSX.Element;
  }>;

const defaultProps: Partial<Props> = {
  size: "md",
};

export const Input = (_props: Props) => {
  const props = mergeProps(defaultProps, _props);
  const [localProps, inputProps] = splitProps(props, [
    "onInput",
    "class",
    "classList",
    "style",
    "size",
    "label",
  ]);
  const id = props.id || ulid();
  return (
    <div
      class={css(localProps.class, "align-middle")}
      classList={localProps.classList}
      style={localProps.style}
    >
      <Label for={id}>{props.label}</Label>
      <input
        {...inputProps}
        id={id}
        class={css(
          "block w-full rounded-lg border-2 border-solid border-grey-500 align-middle",
          "dark:border-grey-100/10 dark:bg-grey-100/5",
          maybe(localProps.size === "sm", "form-size-sm px-2 text-sm"),
          maybe(localProps.size === "md", "form-size-md px-3"),
          maybe(localProps.size === "lg", "form-size-lg px-4 text-lg"),
        )}
        onInput={(e) => localProps.onInput?.(e.target.value, e)}
      />
    </div>
  );
};
