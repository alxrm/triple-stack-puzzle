import React from 'react'
import styled from 'styled-components'
import Plane, {Row} from './Plane'
import Cell, {EmptyCell} from './Cell'

import directions from './constants/Swipes'
import {puzzle} from './util/TripleStackPuzzle'

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
  font-size: 3.5vh;
  justify-content: space-between;
`

const Button = styled.span`
  cursor: pointer;
  border-top: none;
  transition: box-shadow 0.2s ease-in-out;
  border-radius: 4px;
  padding: 4px;
  font-size: 2.5vh;
  box-shadow: 0 0 0 0.1vh white;
  
  :hover {
    box-shadow: 0 0 0 0.3vh white;
  }
`

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      plane: puzzle.plane
    }

    this.restart = this.restart.bind(this)
    this.handleCellSwipe = this.handleCellSwipe.bind(this)
  }

  restart() {
    puzzle.createNew()
    this.setState({
      plane: puzzle.plane
    })
  }

  handleCellSwipe(dir, row, col) {
    const { left, up, right, down } = directions

    switch (dir) {
      case left:
        puzzle.move(row, col, row, col - 1)
        break
      case up:
        puzzle.move(row, col, row - 1, col)
        break
      case right:
        puzzle.move(row, col, row, col + 1)
        break
      case down:
        puzzle.move(row, col, row + 1, col)
        break
      default:
        console.log(dir, 'did nothing') // exhaust
    }

    this.setState({ plane: puzzle.plane })
  }

  render() {
    const { plane } = this.state
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
            onCellSwiped={this.handleCellSwipe}
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
