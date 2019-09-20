import React from "react";
import styled from 'styled-components';
import Cell from "./Cell";

const PlaneContainer = styled.div`
  width: 60vh;
  height: 60vh;
  margin-top: 2vh;
  background-color: #2b2f34;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

export const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
`

export default ({ plane, selectedCell = [], onSelect }) => (
  <PlaneContainer>
    {plane.map((row, rowIndex) => (
      <Row key={rowIndex}>
        {row.map((cell, colIndex) => (
          <Cell
            key={colIndex}
            data={cell}
            row={rowIndex}
            column={colIndex}
            selected={selectedCell[0] === rowIndex && selectedCell[1] === colIndex}
            onSelect={onSelect} />
        ))}
      </Row>
    ))}
  </PlaneContainer>
)