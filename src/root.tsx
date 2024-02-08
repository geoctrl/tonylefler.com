import { Route, Router } from "@solidjs/router";
import { Home } from "./site/pages/home/home";
import { ButtonPage } from "./site/button-page";
import { MusicApp } from "./site/pages/demo/music-app/music-app";
import { AvatarPage } from "./site/pages/components/avatar-page";

export const Root = () => {
  return (
    <Router>
      <Route path="/" component={Home} />

      {/*components*/}
      <Route path="/components/button" component={ButtonPage} />
      <Route path="/components/avatar" component={AvatarPage} />

      {/*demos*/}
      <Route path="/demo/music-app" component={MusicApp} />
    </Router>
  );
};
