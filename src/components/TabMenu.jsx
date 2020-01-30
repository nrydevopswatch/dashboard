import React from "react";
import { Anchor, Box, Heading, Nav, Menu, ResponsiveContext } from "grommet";
import styled from "styled-components";

const StyledHeading = styled(Heading)`
  font-size: 0.8em;
  &:hover {
    cursor: pointer;
  }
`;

const CollapsableNav = () => (
  <StyledHeading background="brand" pad="medium">
    <Box direction="row" align="center" gap="xsmall" />
    <ResponsiveContext.Consumer>
      {responsive =>
        responsive === "small" ? (
          <Menu
            label="Clicky Claky"
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
);

export default CollapsableNav;
