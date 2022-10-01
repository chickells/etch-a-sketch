

// collect grid size via form entry

const grid = document.querySelector('.grid')
let size = 12
function sizeInput (form) {
    grid.innerHTML = ""
    // resets grid to blank before adding all of the cells
    // basically erases/resets
    console.log(form.inputbox.value);
    let input = form.inputbox.value;
    size = input;
    setupGrid(input);
    loadMouseListener();
    loadColorChanger()
}

// script pulled from html
const getSize = document.getElementById('getSize');
getSize.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('submitted!');
    getSize.inputbox.value = ""
});
  
// ^^^^^ THESE TWO DO THE SAME SHIT BUT BOTH ARE NECESSARY
// IDK I DON'T MAKE THE RULES
// but yeah i'll combine them when my brain is actually working lol
// GOT THE SUBMIT BUTTON TO WORK VIA 'ENTER' AND VIA CLICK
// AAAAAND IT CLEARS THE TEXT FIELD WHEN SUBMITTED SO IT LOOKS GOOD
// god damn theres just so many TINY little things involved with the
// smallest of processes




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
setupGrid(size);


// ^^^^^^^^ THIS IS HOW IT WORKS YOU CUNT
// god fucking dammit that shit was so frustrating
// and i knew it'd be such a simple solution
// instead of trying to select it, just make it EQUAL
// what you want and it works



// sense if mouseclick is holding down anywhere on screen
let isHolding = false;
function loadMouseListener () {    
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
}


// change color on mousedown
function loadColorChanger () {
    const cells = document.querySelectorAll('.cell')
    cells.forEach (function (cell) {
        cell.addEventListener('mouseover', function() {
            if (isHolding == true) {
                makeRainbow()
                this.style.backgroundColor = color;
            }
            
        })  
    })
}
loadColorChanger()


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

