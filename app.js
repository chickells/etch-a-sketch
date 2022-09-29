const grid = document.querySelector('.grid')
console.log(grid);

const gridSize = prompt('How many boxes wide?')

for (let i = 0; i < (gridSize*gridSize); i++) {
    let newCell = document.createElement('div');
    document.querySelector('.grid').appendChild(newCell);    
    newCell.classList.add('cell');
}

// FUCK THIS SHIT MY BRAIN IS TOAST
// https://www.w3schools.com/css/css_grid_item.asp
// JUST USE FUCKING CSS GRID WTF
// will continue this later lmao