import type { JSX } from "solid-js";

type Props = JSX.LabelHTMLAttributes<HTMLLabelElement>;

export const Label = (props: Props) => {
  return (
    <label
      class="mb-1 block text-sm font-medium text-raisin-100 dark:text-grey-500"
      {...props}
    >
      {props.children}
    </label>
  );
};
