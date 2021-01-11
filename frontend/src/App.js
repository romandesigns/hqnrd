import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Layout Components
import Footer from "./components/layout/Footer";

// Page Component
import Home from "./pages/user/Home";
import AdminSignIn from "./pages/admin/SignIn";
import AdminSignUp from "./pages/admin/SignUp";
import PageNotFound from "./pages/misc/page-not-found";

import { RootAppStyled } from "./global-styles";

const App = function () {
  return (
    <BrowserRouter>
      <RootAppStyled>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/admin" component={AdminSignIn} />
          <Route exact path="/crear/admin" component={AdminSignUp} />
          <Route component={PageNotFound} />
        </Switch>
        <Footer />
      </RootAppStyled>
    </BrowserRouter>
  );
};

export default App;
