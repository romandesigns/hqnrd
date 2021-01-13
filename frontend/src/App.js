import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Page
import Home from "./page/guest/Home";

// Page component
import Footer from "./components/layout/Footer";

// Style Component
import { AppStyled } from "./global-styles";

const App = function () {
  return (
    <BrowserRouter>
      <AppStyled>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </AppStyled>
    </BrowserRouter>
  );
};

export default App;
