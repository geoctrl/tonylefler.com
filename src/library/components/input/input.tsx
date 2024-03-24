import { ParentProps, mergeProps, splitProps, Show } from "solid-js";
import type { JSX } from "solid-js";
import { always } from "../../../utils/classname-helpers";
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
      class={always("align-middle", localProps.class)}
      classList={localProps.classList}
      style={localProps.style}
    >
      <Show when={!!props.label}>
        <div class="text-label">
          <label for={id}>{props.label}</label>
        </div>
      </Show>
      <input
        {...inputProps}
        id={id}
        class={tv({
          base: "block w-full border border-solid border-grey-500 align-middle text-base dark:border-grey-100/10 dark:bg-grey-100/5",
          variants: {
            size: {
              sm: "h-7 rounded-md px-2 text-sm",
              md: "h-9 rounded-lg px-3",
              lg: "h-11 rounded-lg px-4 text-lg",
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
