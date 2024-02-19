import { render } from "solid-js/web";

import "./styles/index.scss";
import { Root } from "./root";

const root = document.getElementById("root");

render(() => <Root />, root!);
