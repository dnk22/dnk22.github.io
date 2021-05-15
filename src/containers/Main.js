import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Contact from "../pages/contact/ContactComponent";
import { settings } from "../portfolio.js";

const Main = ({ theme }) => {
  const { isSplash } = settings;
  return (
    <React.Fragment>
      {
        isSplash
          ? (
            <HashRouter basename="/">
              <Switch>
                <Route
                  path="/"
                  exact
                  render={(props) => (
                    <Splash {...props} theme={theme} />
                  )}
                />
                <Route
                  path="/home"
                  render={(props) => <Home {...props} theme={theme} />}
                />
                <Route
                  path="/contact"
                  render={(props) => (
                    <Contact {...props} theme={theme} />
                  )}
                />
                <Route
                  path="/splash"
                  render={(props) => (
                    <Splash {...props} theme={theme} />
                  )}
                />
              </Switch>
            </HashRouter>
          )
          : (
            <HashRouter basename="/">
              <Switch>
                <Route
                  path="/"
                  exact
                  render={(props) => <Home {...props} theme={theme} />}
                />
                <Route
                  path="/home"
                  render={(props) => <Home {...props} theme={theme} />}
                />
                <Route
                  path="/contact"
                  render={(props) => (
                    <Contact {...props} theme={theme} />
                  )}
                />
                <Route
                  path="/splash"
                  render={(props) => (
                    <Splash
                      {...props}
                      theme={theme}
                    />
                  )}
                />
              </Switch>
            </HashRouter>
          )
      }
    </React.Fragment>
  )
}
export default Main;
