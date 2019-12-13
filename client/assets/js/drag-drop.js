
$(function(){

   $('.draggable').draggable({
      containment: '#shipBoard',
      cursor: 'move',
      revert: true,
   });
   
   $('.square').droppable({
      drop: handleDrop
   });

})

function handleDrop(event, ui) {
   ui.draggable.position({
      of: $(this),
      my: 'left top',
      at: 'left top'
   });
   ui.draggable.draggable('option', 'revert', false);
   ui.draggable.draggable("option", "grid", [41, 41]);
   
   const states = {
      cell: event.target,
      ship: ui.draggable.context
   }
   
   console.log(states)
   
   // states.cell.classList.add('busy')
}