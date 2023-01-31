const cells = document.querySelectorAll(".stages__cell");
const card = document.querySelector(".stages__card")

function DragAndDrop(){

    function DragStart(){
        setTimeout(()=>{this.classList.add("hidden")}, 0);
    }
    function DragEnd(){
        setTimeout(()=>{this.classList.remove('hidden')},0);
    }

    function dragEnter() {
        this.classList.add('hovered');
      }

      function dragLeave() {
        this.classList.remove('hovered');
      }

      function dragOver(event) {
        event.preventDefault();
      }

      function dragDrop() {
        this.append(card);
        this.classList.remove('hovered');
      }
    
    

    

    card.addEventListener("dragstart",DragStart)
    card.addEventListener("dragend",DragEnd);

    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('dragenter', dragEnter);
        cells[i].addEventListener('dragleave', dragLeave);
        cells[i].addEventListener('dragover', dragOver);
        cells[i].addEventListener('drop', dragDrop);
      }
    

}    
DragAndDrop();