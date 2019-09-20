import fill from 'lodash.fill'
import map from 'lodash.map'
import find from 'lodash.find'
import forEach from 'lodash.foreach'
import shuffle from 'lodash.shuffle'
import every from 'lodash.every'
import assign from 'lodash.assign'
import random from 'lodash.random'
import findIndex from 'lodash.findindex'

export default class TripleStackPuzzle {

  constructor() {
    this.size = 5;
    this.createNew()
  }

  static makeGroupOrder() {
    const res = {}
    forEach(shuffle([1, 2, 3]), (group, i) => assign(res, { [i * 2]: group }))
    return res
  }

  makePlane(size = 5) {
    const plane = map(fill(Array(size), fill(Array(size), 0)),
      (row, i) => map(row, (cell, j) => i % 2 === 0 && j % 2 === 1 ? -1 : 0)
    )

    return map(plane, row => map(row, (cell, col) => this.groupOrder[col] || cell))
  }

  move(fromRow, fromCol, toRow, toCol) {
    if (!this.canMove(fromRow, fromCol, toRow, toCol)) {
      return
    }

    // mere swapping
    const oldDst = this.plane[toRow][toCol]
    const blankIndex = this.blankIndexOf(toRow, toCol)

    this.plane[toRow][toCol] = this.plane[fromRow][fromCol]
    this.plane[fromRow][fromCol] = oldDst
    this.blanks[blankIndex] = [fromRow, fromCol]
  }

  canMove(fromRow, fromCol, toRow, toCol) {
    const plane = [...this.plane]

    if (Math.abs(toRow - fromRow) > 1 || Math.abs(toCol - fromCol) > 1) return false
    if (fromRow === fromCol && toRow === toCol) return false // same cell is no movement
    if (fromRow !== toRow && fromCol !== toCol) return false // no diagonal movement
    if (toRow < 0 || toRow >= this.size || toCol < 0 || toCol >= this.size) return false
    if (fromRow < 0 || fromRow >= this.size || fromCol < 0 || fromCol >= this.size) return false

    // -1 — block, positive — tile
    return plane[fromRow][fromCol] > 0 && plane[toRow][toCol] === 0
  }

  isSolved() {
    const order = this.groupOrder
    const plane = [...this.plane]

    return every(plane, row => every(row, (cell, col) => !order[col] || row[col] === order[col]))
  }

  isSolvedForGroup(group) {
    const groupIndex = parseInt(find(Object.keys(this.groupOrder), i => this.groupOrder[i] === group))

    return every(this.plane, row => row[groupIndex] === group)
  }

  isBlank(row, col) {
    return this.blankIndexOf(row, col) !== 0;
  }

  createNew() {
    this.groupOrder = TripleStackPuzzle.makeGroupOrder()
    this.plane = this.makePlane(this.size)
    this.blanks = this.findBlanks()

    this.shuffle()
  }

  shuffle(shuffleIterations = 5000) {
    for (let step = 0; step < shuffleIterations; step++) {
      const blankIndex = random(this.blanks.length - 1)
      const [toRow, toCol] = this.blanks[blankIndex]
      const moves = this.validMoves(toRow, toCol)
      if (!moves.length) continue

      const moveIndex = random(moves.length - 1)
      const [fromRow, fromCol] = moves[moveIndex]

      this.move(fromRow, fromCol, toRow, toCol)
    }
  }

  blankIndexOf(row, col) {
    const blanks = [...this.blanks]

    return findIndex(blanks, ([blankRow, blankCol]) => blankRow === row && blankCol === col)
  }

  validMoves(blankRow, blankCol) {
    let moves = []

    for (let dr = -1; dr < 2; dr++) {
      for (let dc = -1; dc < 2; dc++) {
        const from = [blankRow + dr, blankCol + dc]
        const [fromRow, fromCol] = from

        if (this.canMove(fromRow, fromCol, blankRow, blankCol)) {
          moves = [...moves, from]
        }
      }
    }

    return moves
  }

  findBlanks() {
    const plane = [...this.plane]
    let blanks = []

    forEach(plane, (row, i) => forEach(row, (cell, j) => {
      if (cell === 0) {
        blanks = [...blanks, [i, j]]
      }
    }))

    return blanks
  }
}

export const puzzle = new TripleStackPuzzle()