import React, { useContext } from "react";

import { Box, ResponsiveContext } from "grommet";

import { TooltipButton } from "./TooltipButton";
import { UserMenu, NotificationAlert } from "./index";
import { GradientGremlin } from "./GradientGremlin";

export const Sidebar = () => {
  const size = useContext(ResponsiveContext);

  return (
    <Box background="brand" overflow="auto">
      <Box align="center" pad={{ vertical: "small" }}>
        <GradientGremlin />
      </Box>
      <Box align="center" gap={size === "small" ? "medium" : "small"}>
        {["Overview", "Request", "Execution"].map((iconName, index) => (
          <TooltipButton key={iconName} iconName={iconName} index={index} />
        ))}
      </Box>
      <Box flex />
      <Box pad={{ vertical: "small" }}>
        <NotificationAlert />
        <UserMenu alignSelf="center" />
      </Box>
    </Box>
  );
};

export default Sidebar;
