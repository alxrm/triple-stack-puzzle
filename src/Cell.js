import React from 'react'
import styled, {css} from 'styled-components'
import {COLORS_BY_TYPE} from './util/cells'

const CellSquare = styled.div`
  width: 10vh;
  height: 10vh;
  background-color: ${({ color = '#383b41' }) => color};
  transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  border-radius: 4px;
  box-shadow: 0 0 0 0.5vh transparent;
  
   ${props => props.selected && css`
     box-shadow: 0 0 0 0.5vh #cfcfcf;
  `}
   
   ${props => !props.locked && css`
     cursor: pointer;

     :hover {
       box-shadow: 0 0 0 0.5vh #cfcfcf;
     }
  `}
`

const Cross = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform: rotate(45deg);
  
  ::before, ::after {
    content: "";
    position: absolute;
    z-index: -1;
    background-color: #4a4a4a;
  }
  
  ::before {
    left: 50%;
    width: 10%;
    margin-left: -5%;
    height: 100%;
  }
  
  ::after {
    top: 50%;
    height: 10%;
    margin-top: -5%;
    width: 100%;
  }
`

export const EmptyCell = styled.div`
  width: 10vh;
  height: 10vh;
`

export default ({ selected, locked, data, row, column, onSelect }) => {
  const select = !locked ? (() => onSelect(row, column, data)) : null

  return (
    <CellSquare
      color={COLORS_BY_TYPE[data]}
      locked={locked || data === -1}
      selected={selected}
      onClick={select}
    >
      {(data === -1) ? <Cross /> : <span />}
    </CellSquare>
  );
}