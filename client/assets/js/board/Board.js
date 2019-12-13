class Board {
   constructor(rootElm, boardSize = 10) {
      this.cellByRow = boardSize
      this.tBody = null
      this.wrapper = document.createElement('div')
      this.table = document.createElement('table')
      this._create(rootElm)
   }

   addClass(className) {
      this.table.classList.add(className)
   }

   // Create table elments
   _create(rootElm) {

      this.wrapper.classList.add('wrapper')
      this.wrapper.appendChild(this.table)

      this.addClass('board') // add class to table

      const tHead = this.table.createTHead()
      const tBody = this.table.createTBody()
      this.tBody = tBody
      
      // thead
      let tr = this.table.insertRow()

      for (let i = 0; i < this.cellByRow; i++) {
         const th = document.createElement('th')

         th.setAttribute('scope', 'col')
         const heading = String.fromCharCode(65 + i)
         th.appendChild(document.createTextNode(heading))
       
         tr.appendChild(th)
      }

      tHead.appendChild(tr)

      // tBody
      for (let y = 0; y < this.cellByRow; y++) {
         const tr = this.table.insertRow(y)
         for (let x = 0; x < this.cellByRow; x++) {

            const td = tr.insertCell(x)
            const div = document.createElement('div')
            div.classList.add('square')
            td.appendChild(div)

            td.dataset.x = x
            td.dataset.y = y + 1

         }
         tBody.appendChild(tr)
      }

      rootElm.appendChild(this.wrapper) // add table to dom root element
   }
}

export default Board;
