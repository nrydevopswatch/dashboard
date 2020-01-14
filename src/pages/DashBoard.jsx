import React from "react";
import { Box } from "grommet";
import Card from "../components/card/Card";

const DashBoard = () => {
  const data = [1, 2, 3, 4];
  return (
    <Box
      align="center"
      justify="center"
      pad="small"
      background={{
        color: "accent-4",
        image:
          "url('https://blog.hdwallsource.com/wp-content/uploads/2014/11/gradient-26052-26737-hd-wallpapers.jpg.png')"
      }}
      height="xlarge"
      flex={false}
      fill="vertical"
      direction="row"
      wrap={true}
      overflow="auto"
    >
      {data.map(() => (
        <Card />
      ))}
    </Box>
  );
};

export default DashBoard;
