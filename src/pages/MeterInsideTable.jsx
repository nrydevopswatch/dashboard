import React from 'react';
// Grommet Imports
import {
  Box,
  Grommet,
  Meter,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Text
} from "grommet";

// Stateless Component
const values = [20, 40, 60, 80, 100];

const FirstPage = () => (
    <Box align="center" pad="large">
      <Box border pad={{ top: "xsmall" }}>
        <Table caption="Meter Inside Table">
          <TableBody>
            {values.map((val, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Meter
                    type="bar"
                    values={[
                      {
                        value: val
                      }
                    ]}
                  />
                </TableCell>
                <TableCell>
                  <Text>{val}% complete</Text>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Box>
);

export default FirstPage;