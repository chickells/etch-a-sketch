// grid size

const grid = document.querySelector('.grid')
let size = prompt('How big? (Max 96)')

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



// sense if mouseclick is holding down anywhere on screen
let isHolding = false;

window.addEventListener('mousedown', function () {
    isHolding = true;
    console.log(isHolding);
})

window.addEventListener('mouseup', function () {
    isHolding = false;
    console.log(isHolding);
})

// entirely prohibits drag n drop
// PAIRED WITH "DRAGGABLE=FALSE" ON DIV.GRID
grid.addEventListener('dragstart', (e) => {
    e.preventDefault()
})  
grid.addEventListener('drop', (e) => {
    e.preventDefault()
})


// change color on mousedown
const cells = document.querySelectorAll('.cell')
console.log(cells);
cells.forEach (function (cell) {
    cell.addEventListener('mouseover', function() {
        if (isHolding == true) {
            this.style.backgroundColor = color;
        }
    })  
})

// HOLD FUCKING SHIT IT WORKS 
// only issue is the 'drag n drop' windows mouse function
// sometimes it tries to drag whatever i clicked so the arrow gets 
// all out of whack and i have to let go and click again


// HOLY FUCK IT WORKS
// cells turns into node list (faux array)
// take that array and run forEach on it
// pass through (LITERALLY ANYTHING), and add click watcher
// to that (anything), and do whatever function you want to it
// LFG CUNTS

// rainbow color generator
let color = 'black';


