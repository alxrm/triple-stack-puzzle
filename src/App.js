import React from 'react'
import styled from 'styled-components'
import Plane, {Row} from './Plane'

import {puzzle} from './util/TripleStackPuzzle'
import Cell, {EmptyCell} from './Cell';

const AppContainer = styled.div`
  width: 150vh;
  height: 100vh;
  display: flex;
  max-width: 90vw;
  align-items: center;
  justify-content: center;
`

const Menu = styled.div`
  color: white;
  letter-spacing: 0;
  padding: 2vh 0;
  display: flex;
  align-items: center;
  font-size: 1.4em;
  justify-content: space-between;
`

const Button = styled.span`
  cursor: pointer;
  border-top: none;
  transition: box-shadow 0.2s ease-in-out;
  border-radius: 4px;
  padding: 4px;
  box-shadow: 0 0 0 0.1vh white;
  
  :hover {
    box-shadow: 0 0 0 0.3vh white;
  }
`

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      plane: puzzle.plane,
      selectedCell: []
    }

    this.move = this.move.bind(this);
    this.restart = this.restart.bind(this);
    this.handleCellSelection = this.handleCellSelection.bind(this);
  }

  move(toRow, toCol) {
    const [fromRow, fromCol] = this.state.selectedCell

    puzzle.move(fromRow, fromCol, toRow, toCol)
    this.setState({ ...this.state, plane: puzzle.plane })
  }

  restart() {
    puzzle.createNew()
    this.setState({
      plane: puzzle.plane,
      selectedCell: []
    })
  }

  handleCellSelection(row, col, data) {
    const { selectedCell } = this.state
    const [fromRow, fromCol] = selectedCell;

    if (data === 0 && !selectedCell) {
      return
    }

    if (fromRow === row && fromCol === col) {
      this.setState({ ...this.state, selectedCell: [] })
      return
    }

    if (data > 0) {
      this.setState({ ...this.state, selectedCell: [row, col] })
      return
    }

    if (data === 0 && selectedCell && puzzle.canMove(fromRow, fromCol, row, col)) {
      puzzle.move(fromRow, fromCol, row, col)
      this.setState({ plane: puzzle.plane, selectedCell: [] })
    }
  }

  render() {
    const { selectedCell, plane } = this.state
    const [groupA, groupB, groupC] = Object.values(puzzle.groupOrder)

    return (
      <AppContainer>
        <div>
          <Row>
            <Cell data={groupA} selected={puzzle.isSolvedForGroup(groupA)} locked />
            <EmptyCell />
            <Cell data={groupB} selected={puzzle.isSolvedForGroup(groupB)} locked />
            <EmptyCell />
            <Cell data={groupC} selected={puzzle.isSolvedForGroup(groupC)} locked />
          </Row>
          <Plane
            plane={plane}
            selectedCell={selectedCell}
            onSelect={this.handleCellSelection}
          />
          <Menu>
            <Button onClick={() => this.restart()}>{puzzle.isSolved() ? 'Again?' : 'Restart'}</Button>
            <span>{puzzle.isSolved() ? 'Solved!' : '3 stacks, the game'}</span>
          </Menu>
        </div>
      </AppContainer>
    )
  }
}

export default App
