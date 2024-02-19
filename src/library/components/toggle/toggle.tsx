import { ParentProps, mergeProps, splitProps } from "solid-js";
import { css, maybe, toggle } from "../../../utils/classname-helpers";

type Props = ParentProps<{
  ref?: HTMLDivElement;
  checked: boolean;
  onChange: (
    checked: boolean,
    e: Event & { currentTarget: HTMLInputElement; target: HTMLInputElement },
  ) => void;
  size?: "sm" | "md" | "lg";
}>;

const defaultProps: Partial<Props> = {
  size: "md",
};

export const Toggle = (_props: Props) => {
  const props = mergeProps(defaultProps, _props);
  const [rest, customProp] = splitProps(props, ["checked", "onChange"]);

  let toggleRef: HTMLInputElement;

  return (
    <div
      class={css(
        "tl-toggle relative inline-block rounded-full",
        maybe(props.size === "sm", "h-6"),
        maybe(props.size === "md", "h-7"),
        maybe(props.size === "lg", "h-8"),
      )}
    >
      <input
        ref={toggleRef!}
        checked={props.checked}
        onChange={(e) => {
          props.onChange(e.target.checked, e);
        }}
        type="checkbox"
        class="absolute left-2 top-2 opacity-0"
      />
      <div
        class={css(
          "relative inline-block h-full cursor-pointer rounded-full align-middle transition-colors",
          toggle(
            !props.checked,
            "bg-raisin-500/25 dark:bg-grey-100/25",
            "bg-primary-500",
          ),
          maybe(props.size === "sm", "w-10"),
          maybe(props.size === "md", "w-12"),
          maybe(props.size === "lg", "w-14"),
        )}
        onClick={() => {
          if (toggleRef) {
            toggleRef.focus();
            toggleRef.click();
          }
        }}
      >
        <div
          class={css(
            "absolute left-1 top-1 rounded-full bg-grey-100 transition-transform",
            "after:absolute after:rounded-full after:transition-colors after:content-['']",
            toggle(
              !props.checked,
              "after:bg-primary-500/0",
              "translate-x-full after:bg-primary-500/50",
            ),
            maybe(
              props.size === "sm",
              "h-4 w-4",
              "after:left-1 after:top-1 after:h-2 after:w-2",
            ),
            maybe(
              props.size === "md",
              "h-5 w-5",
              "after:left-1 after:top-1 after:h-3 after:w-3",
            ),
            maybe(
              props.size === "lg",
              "h-6 w-6",
              "after:left-1 after:top-1 after:h-4 after:w-4",
            ),
          )}
        />
      </div>
    </div>
  );
};
