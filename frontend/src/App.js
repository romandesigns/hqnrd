// Dependencies
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Page
import Home from "./page/guest/Home";
import SignIn from "./page/admin/SignIn";
import SignUp from "./page/admin/SignUp";
import Category from "./page/guest/Category";
import GuestProfile from "./page/guest/Profile";
import RoomDetails from "./page/guest/RoomDetails";
import EmailConfirmed from "./page/misc/email-confirmed";
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
          <Route exact path="/admin/cuenta" component={SignIn} />
          <Route exact path="/:role/iniciar-session" component={SignIn} />
          <Route exact path="/registracion" component={SignUp} />
          <Route exact path="/huesped/perfil" component={GuestProfile} />
          <Route exact path="/verificacion/confirmacion" component={EmailConfirmed} />
          <Route exact path="/404" component={NotFound} />
          <Route exact component={NotFound} />
        </Switch>
        <Footer />
      </AppStyled>
    </BrowserRouter>
  );
};

export default App;
