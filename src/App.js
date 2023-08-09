import React from "react";
import SiparisAlindi from "./components/SiparisAlindi";
import SiparisFormu from "./components/SiparisFormu";
import AnaSayfa from "./components/AnaSayfa";
import { Switch, Route, BrowserRouter, Link } from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
    <div>
        <nav>
          <ul>
            <li>
              <Link to="/">AnaSayfa</Link>
            </li>
            <li>
              <Link to="/siparisFormu">Siparis Formu</Link>
            </li>
            <li>
              <Link to="/siparisAlindi">Siparis Alindi</Link>
            </li>
          </ul>
        </nav>
    </div>
      <Switch>
 
        <Route exact path="/">
          <AnaSayfa />
        </Route>
        <Route exact path="/order-pizza">
          <SiparisFormu />
        </Route>
        <Route exact path="/success">
          <SiparisAlindi/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default App;
