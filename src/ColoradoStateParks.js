import React from "react";
import howManyParks from "./parks/howManyParks";
import { trees, wildlife, elevation } from "./parks/RockyMountain";

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"

  return <h1>Colorado State Parks!</h1>;
}

trees();
wildlife();
elevation();

export default ColoradoStateParks;