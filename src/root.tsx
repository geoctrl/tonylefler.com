import { Route, Router } from "@solidjs/router";
import { Home } from "./site/pages/home";
import { ButtonPage } from "./site/pages/components/button-page";
import { MusicApp } from "./site/pages/demo/music-app/music-app";
import { AvatarPage } from "./site/pages/components/avatar-page";
import { ComponentsPage } from "./site/pages/components/components-page";
import { DemoPage } from "./site/pages/demo/demo-page";
import { InputPage } from "./site/pages/components/input-page";
import { ModalPage } from "./site/pages/components/modal-page";
import { TogglePage } from "./site/pages/components/toggle-page";
import { DialogPage } from "./site/pages/components/dialog-page";
import { FloatPage } from "./site/pages/components/float-page";
import { IconPage } from "./site/pages/components/icon-page";
import { MenuPage } from "./site/pages/components/menu-page";
import { RangeSliderPage } from "./site/pages/components/range-slider-page";

export const Root = () => {
  return (
    <Router>
      <Route path="/" component={Home} />

      {/*components*/}
      <Route path="/components" component={ComponentsPage}>
        <Route path="/" />
        <Route path="/avatar" component={AvatarPage} />
        <Route path="/button" component={ButtonPage} />
        <Route path="/dialog" component={DialogPage} />
        <Route path="/float" component={FloatPage} />
        <Route path="/icon" component={IconPage} />
        <Route path="/input" component={InputPage} />
        <Route path="/menu" component={MenuPage} />
        <Route path="/modal" component={ModalPage} />
        <Route path="/range-slider" component={RangeSliderPage} />
        <Route path="/toggle" component={TogglePage} />
      </Route>

      {/*demos*/}
      <Route path="/demos" component={DemoPage}>
        <Route path="/" />
        <Route path="/music-app" component={MusicApp} />
      </Route>
    </Router>
  );
};
