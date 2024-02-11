import { Route, Router } from "@solidjs/router";
import { Home } from "./site/pages/home";
import { ButtonPage } from "./site/pages/components/button-page";
import { MusicApp } from "./site/pages/demo/music-app";
import { AvatarPage } from "./site/pages/components/avatar-page";
import { ComponentsPage } from "./site/pages/components/components-page";
import { DemoPage } from "./site/pages/demo/demo-page";
import { InputPage } from "./site/pages/components/input-page";

export const Root = () => {
  return (
    <Router>
      <Route path="/" component={Home} />

      {/*components*/}
      <Route path="/components">
        <Route path="/" component={ComponentsPage} />
        <Route path="/button" component={ButtonPage} />
        <Route path="/avatar" component={AvatarPage} />
        <Route path="/input" component={InputPage} />
      </Route>

      {/*demos*/}
      <Route path="/demos">
        <Route path="/" component={DemoPage} />
        <Route path="/music-app" component={MusicApp} />
      </Route>
    </Router>
  );
};
