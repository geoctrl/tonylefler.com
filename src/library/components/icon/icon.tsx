import { ParentProps, mergeProps, splitProps } from "solid-js";
import type { JSX } from "solid-js";
import { css } from "../../../utils/classname-helpers";

export type IconProps = ParentProps<{
  name?: Icons;
}> &
  JSX.SvgSVGAttributes<SVGSVGElement>;

const defaultProps: Partial<IconProps> = {};

export const Icon = (_props: IconProps) => {
  const props = mergeProps(defaultProps, _props);
  const [, rest] = splitProps(props, ["name", "class"]);
  return (
    <svg
      {...rest}
      aria-hidden="true"
      class={css(
        "inline-block shrink-0 fill-current",
        props.class,
        props.class?.includes("size-") ? "" : "size-5",
      )}
    >
      <use href={`/__spritemap#sprite-${props.name}`} />
    </svg>
  );
};
