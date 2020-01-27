import React from "react";
import { Box, DataTable } from "grommet";

import { columns, DATA } from "./data";

const TunableDataTable = () => (
  <Box align="center" pad="large" flex="1">
    <DataTable
      columns={columns.map(c => ({
        ...c,
        search: c.property === "name" || c.property === "location"
      }))}
      data={DATA}
      sortable
      resizeable
    />
  </Box>
);

export default TunableDataTable;
