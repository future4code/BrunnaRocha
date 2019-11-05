import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";

const routes = {
  root: "/",
  home: "/home",
  formTrips: "/application-form",
  createTrips: "/trips/create",
  listTrips: "/trips/list",
  detailsTrips: "/trips/details",


};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.root} component={LoginPage} />
        <Route path={routes.home} component={HomePage} />
        <Route path={routes.formTrips} component={ApplicationForm} />
        <Route path={routes.createTrips} component={HomePage} />
        <Route path={routes.listTrips} component={listTripsPage} />
        <Route path={routes.detailsTrips} component={detailsTripsPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
