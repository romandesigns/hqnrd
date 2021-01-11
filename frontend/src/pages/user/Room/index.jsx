import React from "react";

const Room = ({ match }) => {
  return <div>Room Component {match.params.id}</div>;
};

export default Room;
