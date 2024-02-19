import { Route, Router } from "@solidjs/router";
import { Home } from "./site/pages/home";
import { ButtonPage } from "./site/pages/components/button-page";
import { MusicApp } from "./site/pages/demo/music-app";
import { AvatarPage } from "./site/pages/components/avatar-page";
import { ComponentsPage } from "./site/pages/components/components-page";
import { DemoPage } from "./site/pages/demo/demo-page";
import { InputPage } from "./site/pages/components/input-page";
import { ModalPage } from "./site/pages/components/modal-page";
import { TogglePage } from "./site/pages/components/toggle-page";
import { DialogPage } from "./site/pages/components/dialog-page";

export const Root = () => {
  return (
    <Router>
      <Route path="/" component={Home} />

      {/*components*/}
      <Route path="/components" component={ComponentsPage}>
        <Route path="/" />
        <Route path="/button" component={ButtonPage} />
        <Route path="/avatar" component={AvatarPage} />
        <Route path="/input" component={InputPage} />
        <Route path="/modal" component={ModalPage} />
        <Route path="/toggle" component={TogglePage} />
        <Route path="/dialog" component={DialogPage} />
      </Route>

      {/*demos*/}
      <Route path="/demos" component={DemoPage}>
        <Route path="/" />
        <Route path="/music-app" component={MusicApp} />
      </Route>
    </Router>
  );
};
