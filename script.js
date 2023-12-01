const container = document.querySelector('.container');

document.addEventListener('DOMContentLoaded', function(){
  createGrid();




  function createGrid() {
    const container = document.querySelector('.container');
    for(let i = 0; i < 256; i++){
      const cells = document.createElement('div');
      container.appendChild(cell);
    }
  }
})