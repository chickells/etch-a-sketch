

// collect grid size via form entry

const grid = document.querySelector('.grid')
let size = 14
function submitSize(form) {
    size = form.inputbox.value;
    console.log(size);
  }
  
// brain is too fried to think about this
// ref https://www.infoworld.com/article/2077176/using-javascript-and-forms.html
// https://www.w3schools.com/js/tryit.asp?filename=tryjs_form_submit




// create grid function
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
})

window.addEventListener('mouseup', function () {
    isHolding = false;
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
cells.forEach (function (cell) {
    cell.addEventListener('mouseover', function() {
        if (isHolding == true) {
            makeRainbow()
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

let rainbow = 0
let color = `hsl(${rainbow}, 100%, 50%)`
let x = ""
function makeRainbow () {
    if (rainbow < 360) {
        x = rainbow + 20;
    } else if (rainbow >= 360){
        x = rainbow - 340;
    }
    color = `hsl(${x}, 100%, 50%)`
    rainbow = x
}
// so rainbow was never actually increasing because it was increasing 
// within that 'if' block BUT NEVER ESCAPING
// so we use a random variable to HOLD that value
// then set color with that value
// and set rainbow to that value for our starting position for next time
// GOD DAMN I'M A GENIUS FUCK
// lol time to polish

