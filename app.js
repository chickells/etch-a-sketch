// grid size

const grid = document.querySelector('.grid')
let size = prompt('How big?')

function setupGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    // create cells
    for (let i = 0; i < size * size; i++) {
        const makeCell = document.createElement('div')
        makeCell.classList.add('cell')
        // MUST HAVE APPENDCHILD SO IT ACTUALLY ADDS THE DIV AND
        // CHUCKS IT AT THE END OF THE LIST
        // god fucking damn that was so simple lmao
        grid.appendChild(makeCell)
      }
}

setupGrid(size)

// ^^^^^^^^ THIS IS HOW IT WORKS YOU CUNT
// god fucking dammit that shit was so frustrating
// and i knew it'd be such a simple solution
// instead of trying to select it, just make it EQUAL
// what you want and it works




const cells = document.querySelectorAll('.cell')
console.log(cells);

// change color on click
cells.forEach (function (cell) {
    cell.addEventListener('click', function() {
        this.style.backgroundColor = "red";
    })
})
// HOLY FUCK IT WORKS
// cells turns into node list (faux array)
// take that array and run forEach on it
// pass through (LITERALLY ANYTHING), and add click watcher
// to that (anything), and do whatever function you want to it
// LFG CUNTS


// create rainbow function



// FUCK THIS SHIT MY BRAIN IS TOAST
// https://www.w3schools.com/css/css_grid_item.asp
// JUST USE FUCKING CSS GRID WTF
// will continue this later lmao