import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Layout Components

// Page Component
import Home from "./page/guest/Home";

import { RootAppStyled } from "./global-styles";

const App = function () {
  return (
    <BrowserRouter>
      <RootAppStyled>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </RootAppStyled>
    </BrowserRouter>
  );
};

export default App;
