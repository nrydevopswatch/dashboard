import React from "react";
import { SomeWrapper, TableRow, TableCell } from "./ui";
import { withState, withHandlers, compose, pure, lifecycle } from "recompose";
import ReactDataSheet from "react-datasheet";
import { Box } from "grommet";
import "react-datasheet/lib/react-datasheet.css";

const enhance = compose(
  withState("grid", "setGrid", []),
  withHandlers({
    handleChangeGrid: props => changes => {
      const grid = props.grid.map(row => [...row]);
      changes.forEach(({ cell, row, col, value }) => {
        grid[row][col] = { ...grid[row][col], value };
      });
      props.setGrid(grid);
    }
  }),
  lifecycle({
    componentDidMount() {
      const some = [
        [
          { value: "title1", readOnly: true },
          { value: "title2", readOnly: true },
          { value: "title3", readOnly: true },
          { value: "title4", readOnly: true },
          { value: "title5", readOnly: true }
        ],
        [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }, { value: 5 }],
        [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }, { value: 5 }],
        [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }, { value: 5 }],
        [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }, { value: 5 }],
        [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }, { value: 5 }]
      ];
      this.props.setGrid(some);
    }
  }),
  pure
);

export const DataSheet = enhance(props => (
  <Box>
    <ReactDataSheet
      data={props.grid}
      rowRenderer={TableRow}
      cellRenderer={TableCell}
      sheetRenderer={SomeWrapper}
      valueRenderer={cell => cell.value}
      onCellsChanged={props.handleChangeGrid}
    />
  </Box>
));

export default DataSheet;
