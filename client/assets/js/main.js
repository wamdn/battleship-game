import AttackBoard from './board/AttackBoard'
import ShipBoard from './board/ShipBoard'
import Rules from './rules/Rules'

const app = document.getElementById('app')
// const boardSize = 10

// exemple
const matrix = [
   [1,1,1,1,0,0,0,1,1,1],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,1,0,1,1,1,0],
   [0,1,0,0,1,0,0,0,0,0],
   [0,1,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,1,1,0,0,1,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,1,0,0,1,0,0],
   [0,0,0,1,0,0,0,0,0,0]
]

const shipBoard = new ShipBoard(app)
shipBoard.addClass('blue')

const attackBoard = new AttackBoard(app)
attackBoard.addClass('red')

// const rules = new Rules()
// console.log(rules.matrix)