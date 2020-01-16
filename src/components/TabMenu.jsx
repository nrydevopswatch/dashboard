import React from 'react';
import PropTypes from "prop-types";
import { Box, DropButton, Text } from "grommet";
import { Close } from "grommet-icons";

const DropContent = ({ onClose }) => (
  <Box pad="medium">
    <Box direction="row" justify="left" align="left">
    </Box>
    <Text>Item 1</Text>
    <Text>Item 2</Text>
  </Box>
);

DropContent.propTypes = {
  onClose: PropTypes.func.isRequired
};

const TabMenu = () => {
  const [open, setOpen] = React.useState();
  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
      <Box align="left" pad="none">
        <DropButton
          label="Menu"
          open={open}
          onOpen={onOpen}
          onClose={onClose}
          dropContent={<DropContent onClose={onClose} />}
          dropProps={{ align: { top: "bottom" } }}
        />
      </Box>
  );
};

export default TabMenu;
