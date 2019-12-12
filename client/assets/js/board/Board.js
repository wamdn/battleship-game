class Board {
   constructor(rootElm, boardSize = 10) {
      this.cellByRow = boardSize
      this.table = document.createElement('table')
      this._create(rootElm)
   }

   addClass(className) {
      this.table.classList.add(className)
   }

   // Create table elments
   _create(rootElm) {

      this.addClass('board') // add class to table

      const tHead = this.table.createTHead()
      const tBody = this.table.createTBody()

      
      // thead
      let tr = this.table.insertRow()

      for (let i = 0; i <= this.cellByRow; i++) {
         const th = document.createElement('th')
         if (i !== 0) {
            th.setAttribute('scope', 'col')
            const heading = String.fromCharCode(65 + (i - 1))
            th.appendChild(document.createTextNode(heading))
         }
         tr.appendChild(th)
      }

      tHead.appendChild(tr)

      // tBody
      for (let y = 0; y < this.cellByRow; y++) {
         const tr = this.table.insertRow(y)
         for (let x = 0; x <= this.cellByRow; x++) {
            if (x === 0) {
               const th = document.createElement('th')
               th.setAttribute('scope', 'row')
               th.appendChild(document.createTextNode(y + 1))
               tr.appendChild(th)
            }
            else { 
               const td = tr.insertCell(x)
               td.dataset.x = x
               td.dataset.y = y + 1
            }
         }
         tBody.appendChild(tr)
      }

      rootElm.appendChild(this.table) // add table to dom root element
   }
}

export default Board;
