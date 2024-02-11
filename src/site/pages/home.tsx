import { ParentProps, mergeProps } from "solid-js";
import { AppHeader } from "../components/app-header";
import { MusicApp } from "./demo/music-app";

type Props = ParentProps<{}>;

const defaultProps: Partial<Props> = {};

export const Home = (_props: Props) => {
  const props = mergeProps(defaultProps, _props);
  return (
    <>
      <AppHeader />
      Home page
    </>
  );
};
