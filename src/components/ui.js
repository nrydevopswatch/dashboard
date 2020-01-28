import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  width: max-content;
  box-sizing: border-box;
  & > span {
    &:focus {
      outline: none;
    }
  }
`;

export const SomeWrapper = styled.table`
  margin-top: 100px;
  border-collapse: collapse;
  border-spacing: 2px;
  border-color: grey;
  &:focus {
    outline: none;
  }
`;

export const TableRow = styled.tr`
  &:focus {
    outline: none;
  }
`;

export const TableCell = styled.td`
  background: gray !important;
  &.data-grid-container .data-grid .cell.read-only {
    background: black !important;
  }
  width: 100px;
  padding: 0;
  border: 1px solid black;
  & > span {
    display: block;
    border: 1px solid transparent;
  }
  &.selected {
    & > span {
      display: block;
      border: 1px solid green;
      &:focus {
        box-shadow: 0 0 5px 0 rgba(206, 40, 40, 0.5);
      }
    }
  }

  & > input {
    width: 100px;
    outline: none;
    border: none;
    &:focus {
      box-shadow: 0 0 5px 0 rgba(206, 40, 40, 0.5);
    }
  }
`;
