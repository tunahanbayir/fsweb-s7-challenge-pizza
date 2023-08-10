import React from "react";
import BirinciSayfa from "./components/BirinciSayfa";
import AnaSayfa from "./components/AnaSayfa";
import SiparisFormu from "./components/SiparisFormu";
import SiparisAlindi from "./components/SiparisAlindi";

import { Switch, Route, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <BirinciSayfa />
          </Route>
        
        <Route exact path="/mainpage">
          <AnaSayfa />
        </Route>
        <Route exact path="/order-pizza">
          <SiparisFormu />
        </Route>
        
        <Route exact path="/success">
          <SiparisAlindi />
        </Route>
          </Switch>
    </BrowserRouter>
  );
};
export default App;