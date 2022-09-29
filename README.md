# etch-a-sketch
Interactive Etch-a-Sketch Game!

Objectives:
- Create a UI that allows a user to input how many squares should fill the grid (960px wide max, 100x100 max)
- Create grid HTML elements using javascript as opposed to writing code manually
- Each block should technically be a button to utilize :hover (leaving a trail)
- Each block shoulld change colors on-click, with a rainbow color generating function (goal being user can hold down mouse and drag as opposed to tons of clicks)

(Extra Credit)
- Optimize for mobile using finger instead of mouse
- Stylize so it doesn't look like trash

-------------------------------------

Rainbow Function:
-create code that adds 18* to Hue in H, S, L color code format that it takes 20 clicks (or pixels) to go through the entire rainbow and leave a trail
-function would be nextColor() and it would take in color and add 18 to H.  Once it reaches 360+, reset to Number % 360, ie the remainder of XXX - 360.
-**can be any number, but this will progressively rotate through hue
