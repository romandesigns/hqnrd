// Dependencies
import React from "react";
// Components
import Button from "../../components/ui-elements/Button";
// Styled Components
import * as NOTFOUND from "./style";

function NotFound() {
  return (
    <NOTFOUND.Main>
      <h2>La pagina que buscas no existe :(</h2>
      <Button type="goback">Regresar</Button>
    </NOTFOUND.Main>
  );
}

export default NotFound;
