import React from "react";

import { Box, Grommet, WorldMap } from "grommet";

const ThirdPage = () => {
  const [places, setPlaces] = React.useState();

  const onSelectPlace = place => {
    setPlaces([{ color: "accent-1", location: place }]);
  };

  return (
      <Box align="center" pad="large">
        <WorldMap onSelectPlace={onSelectPlace} places={places} />
      </Box>
  );
};

export default ThirdPage;