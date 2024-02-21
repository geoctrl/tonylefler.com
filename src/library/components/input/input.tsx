import { ParentProps, mergeProps, splitProps, Show } from "solid-js";
import type { JSX } from "solid-js";
import { css } from "../../../utils/classname-helpers";
import { ulid } from "ulid";
import { tv } from "tailwind-variants";

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
      class={css("align-middle", localProps.class)}
      classList={localProps.classList}
      style={localProps.style}
    >
      <Show when={!!props.label}>
        <label class="text-label" for={id}>
          {props.label}
        </label>
      </Show>
      <input
        {...inputProps}
        id={id}
        class={tv({
          base: "block w-full border border-solid border-grey-500 align-middle text-base dark:border-grey-100/10 dark:bg-grey-100/5",
          variants: {
            size: {
              sm: "rounded-md px-2 text-sm form-size-sm",
              md: "rounded-lg px-3 form-size-md",
              lg: "rounded-lg px-4 text-lg form-size-lg",
            },
          },
        })({
          size: props.size || "md",
        })}
        onInput={(e) => localProps.onInput?.(e.target.value, e)}
      />
    </div>
  );
};
