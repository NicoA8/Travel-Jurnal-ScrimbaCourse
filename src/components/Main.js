import React from "react";
import Destination from "./Destination";
import destinations from "../destinations";

function Main() {
  return (
    <main>
      {destinations.map(destination => {
        return <Destination key={destination.id} destination={destination} />;
      })}
    </main>
  );
}

export default Main;
