import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Page Component
import Home from "./page/guest/Home";

import { AppStyled } from "./global-styles";

const App = function () {
  return (
    <BrowserRouter>
      <AppStyled>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </AppStyled>
    </BrowserRouter>
  );
};

export default App;
