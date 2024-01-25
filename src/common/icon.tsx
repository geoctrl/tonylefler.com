import { ParentProps, mergeProps, splitProps } from "solid-js";
import type { JSX } from "solid-js";
import { css } from "../utils/classname-helpers";

type Props = ParentProps<{ name: Icons; size?: number }> &
  JSX.SvgSVGAttributes<SVGSVGElement>;

const defaultProps: Partial<Props> = {};

export const Icon = (_props: Props) => {
  const props = mergeProps(defaultProps, _props);
  const [, rest] = splitProps(props, ["name", "size", "class"]);
  return (
    <svg
      {...rest}
      aria-hidden="true"
      class={css(props.class, "fill-current h-5 w-5 inline-block")}
      style={props.size ? {
        width: `${props.size / 16}rem`,
        height: `${props.size / 16}rem`,
      } : undefined}
    >
      <use href={`/__spritemap#sprite-${props.name}`} />
    </svg>
  );
};
