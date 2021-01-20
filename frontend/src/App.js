// Dependencies
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Page
import Home from "./page/guest/Home";
import Category from "./page/guest/Category";
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
          <Route path="/categoria/:cat" component={Category} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </AppStyled>
    </BrowserRouter>
  );
};

export default App;
