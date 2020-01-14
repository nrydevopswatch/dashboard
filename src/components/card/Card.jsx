import React from "react";
import { Box, Button, Heading, Text, Paragraph } from "grommet";
import { Previous } from "grommet-icons";

const Card = () => (
  <Box
    align="center"
    pad="small"
    background={{
      "0": "b",
      "1": "r",
      "2": "a",
      "3": "n",
      "4": "d",
      color: "white",
      position: "bottom"
    }}
    round="medium"
    elevation="xlarge"
    margin="medium"
    direction="column"
    alignSelf="center"
    animation={{ type: "fadeIn", size: "medium" }}
  >
    <Box
      align="start"
      justify="start"
      pad="small"
      direction="row"
      alignSelf="start"
    >
      <Button
        icon={<Previous />}
        primary={true}
        color="brand"
        hoverIndicator={false}
        disabled={false}
        reverse={false}
      />
    </Box>
    <Box align="center" justify="center" pad="xsmall" margin="xsmall">
      <Box
        align="center"
        justify="center"
        pad="large"
        margin="medium"
        background={{
          dark: false,
          color: "light-2",
          image:
            "url('https://avatars0.githubusercontent.com/u/1753301?s=460&v=4\n')"
        }}
        round="full"
      />
      <Heading level="2" size="medium" margin="xsmall" textAlign="center">
        Chris Carlozzi
      </Heading>
      <Text textAlign="center">Product Designer</Text>
      <Paragraph size="small" margin="medium" textAlign="center">
        I'm a designer in SF. I work with folks that are innovators willing to
        make the next big idea. What do you want to make?
      </Paragraph>
      <Box
        align="center"
        justify="center"
        pad="small"
        direction="row-responsive"
        flex={true}
        alignSelf="center"
        basis="xxsmall"
        gap="small"
        margin="xsmall"
      >
        <Button label="Portfolio" primary={true} plain={false} />
        <Button label="Hire Me" />
      </Box>
    </Box>
  </Box>
);

export default Card;
