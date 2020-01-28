import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { toggleRightPanel } from "../redux/layout/layout.action";
import { toggleTheme } from "../redux/theme/theme.action";
import { Box, Button, Heading } from "grommet";
import { Notification, Info, Blank } from "grommet-icons";
import styled from "styled-components";

// Component Import
import TabMenu from "./TabMenu";

const StyledHeading = styled(Heading)`
  &:hover {
    cursor: pointer;
  }
`;

const Header = () => {
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
      <Blank />
      <TabMenu
        label="Menu"
        align={{ top: "bottom", left: "right" }}
        items={[
          { label: "First Action", onClick: () => {} },
          { label: "Second Action", onClick: () => {} }
        ]}
      />
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
