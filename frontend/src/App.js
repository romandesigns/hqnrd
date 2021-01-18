import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

// Page
import Home from "./page/guest/Home";

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
          <Redirect from="/categorias" to="/" />
          <Redirect from="/habitaciones" to="/" />
        </Switch>
        <Footer />
      </AppStyled>
    </BrowserRouter>
  );
};

export default App;
