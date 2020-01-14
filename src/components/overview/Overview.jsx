import React from "react";
import { WorldMap } from "grommet";

const ThirdPage = () => {
  const [places, setPlaces] = React.useState();

  const onSelectPlace = place => {
    setPlaces([{ color: "accent-4", location: place }]);
  };

  return (
        <WorldMap onSelectPlace={onSelectPlace} places={places} />
  );
};

export default ThirdPage;