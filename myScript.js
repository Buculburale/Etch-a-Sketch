// Initial number of grids is set to 0.
const numberOfGrid = 0;

// Select the HTML container element with the class 'container'.
const container = document.querySelector('.container');

// Select the HTML button element.
const resetButton = document.querySelector('button');

// Function to create a grid with a specified number of rows and columns.
const createGrid = (amountOfGrid) => {
  // Create a container for the grid.
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');

  // Loop to create rows in the grid.
  for (let i = 0; i < amountOfGrid; i++) {
    const row = document.createElement('div');
    row.classList.add('grid-row');
    
    // Nested loop to create individual grid boxes within each row.
    for (let j = 0; j < amountOfGrid; j++) {
      const gridBox = document.createElement('div');
      gridBox.classList.add('grid-box');

      // Add a mouse enter listener to change the background color on hover.
      gridBox.addEventListener('mouseenter', () => {
        gridBox.style.backgroundColor = 'black';
      });
      
      // Append the grid box to the current row.
      row.appendChild(gridBox);
    }
    
    // Append the row to the grid container.
    wrapper.appendChild(row);
  }
  
  // Append the grid container to the main container in the HTML.
  container.appendChild(wrapper);
}

// Create the initial grid with the specified number of grids (0 in this case).
createGrid(numberOfGrid);

// Event listener for the reset button.
resetButton.addEventListener('click', () => {
  // Prompt the user to input the desired dimensions for the new grid.
  let userSize = Number(prompt('What dimensions do you want for the new grid'));

  // Validate user input to ensure it's not greater than 100.
  while (userSize > 100) {
    userSize = Number(prompt('Provide a size equal to or smaller than 100'));
  }

  // Remove the existing grid before creating a new one.
  const wrapper = document.querySelector('.wrapper');
  container.removeChild(wrapper);

  // Create the new grid based on the user's input.
  createGrid(userSize);
})
