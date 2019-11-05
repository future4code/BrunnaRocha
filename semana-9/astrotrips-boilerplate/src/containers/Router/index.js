import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import ApplicationForm from "../ApplicationForm";
import HomePage from "../HomePage";
import listTripsPage from "../ListTripsPage";
import TripDetailsPage from "../TripDetailsPage/";

 export const routes = {
  home: "/",
  login: "/login",
  formTrips: "/application-form",
  createTrips: "/trips/create",
  listTrips: "/trips/list",
  detailsTrips: "/trips/details",


};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.login} component={LoginPage} />
        <Route path={routes.formTrips} component={ApplicationForm} />
        <Route path={routes.createTrips} component={HomePage} />
        <Route path={routes.listTrips} component={listTripsPage} />
        <Route path={routes.detailsTrips} component={TripDetailsPage} />
        <Route path={routes.home} component={HomePage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
