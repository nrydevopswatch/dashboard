import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { toggleRightPanel } from "../redux/layout/layout.action";
import { toggleTheme } from "../redux/theme/theme.action";
import { Box, Button, Heading, ResponsiveContext, Text } from "grommet";
import { Notification, Info } from "grommet-icons";
import styled from "styled-components";

// Component Import
import TabMenu from "./TabMenu";
import BirdIcon from "./BirdIcon";

const StyledHeading = styled(Heading)`
  &:hover {
    cursor: pointer;
  }
`;

const Header = () => {
  const size = React.useContext(ResponsiveContext);
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <Box
      as="header"
      direction="row"
      align="center"
      justify="between"
      background="brand"
      pad={{ left: "medium", right: "small", vertical: "large" }}
      elevation="medium"
      style={{ zIndex: "1" }}
    >
      <StyledHeading background="brand" level="3">
        <Box direction="row">
          <Button
            sansSerif="Helvetica"
            border="none"
            path="/"
            icon={<BirdIcon size="xlarge" />}
            label={size !== "xlarge" && <Text size="xlarge">BIRD</Text>}
          />
        </Box>
      </StyledHeading>
      <StyledHeading background="none" level="3">
        <TabMenu
          label="Menu"
          align={{ top: "bottom", left: "right" }}
          items={[
            { label: "First Action", onClick: () => {} },
            { label: "Second Action", onClick: () => {} }
          ]}
        />
      </StyledHeading>
      <StyledHeading level="3" margin="none" onClick={() => history.push("/")}>
        Dashboard
      </StyledHeading>
      <Box direction="row">
        <Button icon={<Info />} onClick={() => dispatch(toggleTheme())} />
        <Button
          icon={<Notification />}
          onClick={() => dispatch(toggleRightPanel())}
        />
      </Box>
    </Box>
  );
};

export default Header;
