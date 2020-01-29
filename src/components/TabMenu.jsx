import React from "react";
import {
  Anchor,
  Box,
  Grommet,
  Heading,
  Nav,
  Menu,
  ResponsiveContext
} from "grommet";
import { grommet } from "grommet/themes";
import styled from "styled-components";

const StyledHeading = styled(Heading)`
  &:hover {
    cursor: pointer;
  }
`;

const CollapsableNav = () => (
  <Grommet theme={grommet}>
    <StyledHeading background="dark-1" pad="small">
      <Box direction="row" align="center" gap="small" />
      <ResponsiveContext.Consumer>
        {responsive =>
          responsive === "small" ? (
            <Menu
              label="Pages"
              items={[
                { label: "Menu", onClick: () => {} },
                { label: "Quick Links", onClick: () => {} },
                { label: "Admin", onClick: () => {} }
              ]}
            />
          ) : (
            <Nav direction="row">
              <Anchor href="#" label="Menu" />
              <Anchor href="#" label="Quick Links" />
              <Anchor href="#" label="Admin" />
            </Nav>
          )
        }
      </ResponsiveContext.Consumer>
    </StyledHeading>
  </Grommet>
);

export default CollapsableNav;
