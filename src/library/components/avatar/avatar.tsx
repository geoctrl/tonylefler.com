import { ParentProps, mergeProps, JSX } from "solid-js";
import { twMerge } from "tailwind-merge";

import { always, maybe } from "../../../utils/classname-helpers";

type Props = Pick<JSX.HTMLAttributes<HTMLDivElement>, "class" | "classList"> &
  ParentProps<{ src?: string; size?: "xs" | "sm" | "md" | "lg" }>;

const defaultProps: Partial<Props> = { size: "md" };

export const Avatar = (_props: Props) => {
  const props = mergeProps(defaultProps, _props);
  return (
    <div
      class={twMerge(
        always(
          "inline-block align-middle",
          maybe(props.size === "xs", "size-7"),
          maybe(props.size === "sm", "size-9"),
          maybe(props.size === "md", "size-16"),
          maybe(props.size === "lg", "size-28"),
        ),
        props.class,
      )}
    >
      <img class="rounded-full object-cover" src={props.src} alt="" />
    </div>
  );
};
