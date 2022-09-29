const grid = document.querySelector('.grid')
// const gridSize = prompt('How many boxes wide?')
// let width = 960 / gridSize
// console.log(width);

const test = document.querySelector('.grid');
const styles = window.getComputedStyle(test)
let columnTest = styles.getPropertyValue('grid-template-columns')
console.log(columnTest);

columnTest = "repeat(4, 130px)"


// for (let i = 0; i < (gridSize*gridSize); i++) {
//     grid.style.setProperty('grid-template-columns', repeat(gridSize, (960/gridSize)px))
//     let newCell = document.createElement('div');
//     document.querySelector('.grid').appendChild(newCell);    
//     newCell.classList.add('cell');
// }

// FUCK THIS SHIT MY BRAIN IS TOAST
// https://www.w3schools.com/css/css_grid_item.asp
// JUST USE FUCKING CSS GRID WTF
// will continue this later lmao