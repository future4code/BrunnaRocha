import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import Login from "../Login/Login";
import SignUp from "../SignUp/signup";
import ProductCard from "../../components/ProductCard";
import FeedPage from "../FeedPage";
import PerfilPage from "../PerfilPage";

export const routes = {
    root: "/",
    signup: "/signup",
    perfil: "/perfil",
    feed: "/feed"
};

function Router(props) {
    return (
        <ConnectedRouter history={props.history}>
            <Switch>
                <Route exact path={routes.root} component={Login} />
                <Route exact path={routes.signup} component={SignUp} />
                <Route exact path={routes.feed} component={FeedPage} />
                <Route exact path={routes.perfil} component={PerfilPage} />
                <Route exact path={routes.root} component={ProductCard} />
            </Switch>
        </ConnectedRouter>
    );
}

export default Router;