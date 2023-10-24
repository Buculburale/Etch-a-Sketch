//Creating a 16x16 grid of square divs.
const numberOfGrid = 8;
const container = document.querySelector('.container');

const createGrid = (amountOfGrid) =>{
  for (let i = 0; i < amountOfGrid; i++) {
    const row = document.createElement('div');
    row.classList.add('grid-row');
    for (let j = 0; j < amountOfGrid; j++) {
      const gridBox = document.createElement('div');
      gridBox.classList.add('grid-box');

      //adding mouse enter lstener to change background color.
      gridBox.addEventListener('mouseenter', () =>{
        gridBox.style.backgroundColor = 'black';
      })
      row.appendChild(gridBox);
   }
   container.appendChild(row) 
  }
}

createGrid(numberOfGrid);