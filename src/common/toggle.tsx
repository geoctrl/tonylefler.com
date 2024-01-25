import { ParentProps, mergeProps } from "solid-js";

type Props = ParentProps<{
  checked: boolean;
  onChange: (
    checked: boolean,
    e: Event & { currentTarget: HTMLInputElement; target: HTMLInputElement },
  ) => void;
}>;

const defaultProps: Partial<Props> = {};

export const Toggle = (_props: Props) => {
  const props = mergeProps(defaultProps, _props);
  return (
    <div>
      <input
        checked={props.checked}
        onChange={(e) => props.onChange(e.target.checked, e)}
        type="checkbox"
      />
    </div>
  );
};
