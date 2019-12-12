class Rules {
   constructor(boardSize = 10) {
      this.boardSize = boardSize
      this.matrix = null
      this.createMatrix()

   }
   
   createMatrix() {
      const matrix = []
      const size = this.boardSize
      for (let y = 0; y < size; y++) {
         const row = []
         for (let x = 0; x < size; x++) {
            row.push([0])
         }
         matrix.push(row)
      }
      this.matrix = matrix
   }

   placeShip() {
      const martix = this.matrix
      
   }
}

export default Rules