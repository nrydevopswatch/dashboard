import React from "react";
import { Anchor, Box, Header, Nav, Menu, ResponsiveContext } from "grommet";

const CollapsableNav = () => (
  <Header background="branded" pad="medium">
    <Box direction="row" align="center" gap="small" />
    <ResponsiveContext.Consumer>
      {responsive =>
        responsive === "small" ? (
          <Menu
            label="MENU"
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
  </Header>
);

export default CollapsableNav;
