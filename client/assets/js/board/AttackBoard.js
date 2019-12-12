import Board from "./Board";

class AttackBoard extends Board {
   constructor (rootElm) {
      super(rootElm)
      this.addEventClick() // add event on click
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
}

export default AttackBoard