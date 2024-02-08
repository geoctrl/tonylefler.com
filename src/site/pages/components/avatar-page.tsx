import { ParentProps, mergeProps } from "solid-js";
import { Avatar } from "../../../library/avatar/avatar";
import profile from "../../assets/profile-2.png";

type Props = ParentProps<{}>;

const defaultProps: Partial<Props> = {};

export const AvatarPage = (_props: Props) => {
  const props = mergeProps(defaultProps, _props);
  return (
    <div>
      <Avatar src={profile} size="xs" />
      <Avatar src={profile} size="sm" />
      <Avatar src={profile} size="md" />
      <Avatar src={profile} size="lg" />
    </div>
  );
};
