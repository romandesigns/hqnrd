// Dependencies
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Page
import Home from "./page/guest/Home";
import Login from "./page/admin/Login";
import Category from "./page/guest/Category";
import RoomDetails from "./page/guest/RoomDetails";
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
          <Route exact path="/categoria/:cat" component={Category} />
          <Route exact path="/categoria/:cat/habitacion/:id" component={RoomDetails} />
          <Route exact path="/admin/cuenta" component={Login} />
          <Route exact path="/404" component={NotFound} />
          <Route exact component={NotFound} />
        </Switch>
        <Footer />
      </AppStyled>
    </BrowserRouter>
  );
};

export default App;
