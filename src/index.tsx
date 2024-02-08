/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import { Root } from "./root";
import { Router } from "@solidjs/router";

const root = document.getElementById("root");

render(() => <Root />, root!);
