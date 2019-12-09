(() => {

   class Board {
      constructor(rootElm, cellByRow = 10) {
         this.cellByRow = cellByRow
         this.table = document.createElement('table')
         this._create(rootElm)
      }

      addClass(className) {
         this.table.classList.add(className)
      }

      addEventClick() {
         const cells = this.table.querySelectorAll('td')
         cells.forEach(cell => {
            cell.addEventListener('click', () => {
               console.log({ 
                  posX: cell.dataset.x, 
                  posY: cell.dataset.y 
               })
            })
         });
      }

      // Create table elments
      _create(rootElm) {
         this.addClass('board')
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
         this.addEventClick()
         rootElm.appendChild(this.table)
      }
   }

   const app = document.getElementById('app')

   const boardOne = new Board(app)
   boardOne.addClass('blue')

   const boardTwo = new Board(app)
   boardTwo.addClass('red')

})()