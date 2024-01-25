import { Button } from "../common/button";
import { Icon } from "../common/icon";

type Props = {};

export const ButtonPage = (props: Props) => {
  const {} = props;

  return (
    <div class="flex gap-2">
      <Button variant="primary" dropdown>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="secondary-color">Secondary Color</Button>
      <Button variant="border">Border</Button>
      <Button variant="tertiary">Tertiary</Button>
    </div>
  );
};
