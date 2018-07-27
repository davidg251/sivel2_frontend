import React from "react";
import { Switch, Route } from "react-router-dom";
//import CasesList from "./CasesList";
import CasesList from "../components/CasesList";
import Home from "./Home";
import Map from './Map';

/*componente raiz*/
const Main = () => (
  <main className="panel">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/casos" component={CasesList} />
      <Route path="/map" component={Map} />
    </Switch>
  </main>
);

export default Main;
