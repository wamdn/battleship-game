import BattleShip from './BattleShip'

class ShipFleet {
   constructor() {
      this.fleet = null
      this.createFleet()
   }
   createFleet() {
      const shipParams = [
         {id: 1, size: 4},
         {id: 2, size: 3},
         {id: 3, size: 3},
         {id: 4, size: 2},
         {id: 5, size: 2},
         {id: 6, size: 2},
         {id: 7, size: 1},
         {id: 8, size: 1},
         {id: 9, size: 1},
         {id: 10, size: 1}
      ]

      shipParams.forEach(param => {
         this.fleet.push(new BattleShip(param.size, param.id))
      })
   }
}

export default ShipFleet