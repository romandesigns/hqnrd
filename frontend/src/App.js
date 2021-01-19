// Dependencies
import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

// Page
import Home from "./page/guest/Home";
import Categoria from "./page/guest/Categoria";
import NotFound from "./page/NotFound";

// Page component
import Footer from "./components/layout/Footer";

// Style Component
import { AppStyled } from "./utils/app-root";

const App = function () {
  return (
    <BrowserRouter>
      <AppStyled>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/categoria/:cat" component={Categoria} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </AppStyled>
    </BrowserRouter>
  );
};

export default App;
