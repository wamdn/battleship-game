class ShipBlock {
   constructor(posX, posY, shipId) {
      this.posX = posX
      this.posY = posY
   }

   getCell(table) {
      const cell = table.queryselector(`[data-x="${this.posX}" data-y="${this.posY}"]`)
   }

   add(cell, shipId) {
      cell.classList.add('ship')
      cell.dataset.id = shipId
   }

   remove(cell) {
      cell.classList.remove('ship')
      cell.dataset.id = ''
   }
}

export default ShipBlock