import { Route, Router } from "@solidjs/router";
import { Home } from "./site/pages/home";
import { ButtonPage } from "./site/pages/components/button-page";
import { MusicApp } from "./site/pages/demo/music-app";
import { AvatarPage } from "./site/pages/components/avatar-page";
import { ComponentsPage } from "./site/pages/components/components-page";
import { DemoPage } from "./site/pages/demo/demo-page";

export const Root = () => {
  return (
    <Router>
      <Route path="/" component={Home} />

      {/*components*/}
      <Route path="/components" component={ComponentsPage}>
        <Route path="/" component={(props) => <div>components</div>} />
        <Route path="/button" component={ButtonPage} />
        <Route path="/avatar" component={AvatarPage} />
      </Route>

      {/*demos*/}
      <Route path="/demos" component={DemoPage}>
        <Route path="/" component={() => <div>demos</div>} />
        <Route path="/music-app" component={MusicApp} />
      </Route>
    </Router>
  );
};
