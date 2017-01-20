/*
Canvas States
A simmple way to undestand the canvas save() and store() functions.

The full list of properties that are related to the canvas state.

drawing state are: 
the transformation matrix, 
the clipping region, 
globalAlpha, 
globalCompositeOperation, 
strokeStyle, 
fillStyle, 
lineWidth, 
lineCap, 
lineJoin, 
miterLimit, 
shadowOffsetX, 
shadowOffsetY, 
shadowBlur, 
shadowColor, 
font, 
textAlign,
textBaseline
*/

window.addEventListener('load', init, false);
function init() {

    let canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext('2d');

    let x = 20;
    let y = 20;
    let width = 80;
    let height = 80;

    let box1 = new Box(x, y, width, height, '#ee3344', context);
    x += 100;
    let box2 = new Box(x, y, width, height, '#f6e6ca', context);
    x += 100;
    let box3 = new Box(x, y, width, height, '#b5e3ef', context);
    x += 100;
    let boxState = new Box(x, y, width, height, 'yellow', context);

    //Draw on context
    context.fillStyle = box1.color;
    box1.render();
    context.save(); // Saves a state to the stack with the current propeties. fillStyle = 'red'

    context.fillStyle = box2.color;
    box2.render();
    context.save();// Saves a state to the stack with the current propeties. fillStyle = 'blue'

    context.fillStyle = box3.color;
    box3.render();
    context.save();// Saves a state to the stack with the current propeties. fillStyle = 'green'

    context.fillStyle = boxState.color;//Yellow color
    // context.restore();//Restore to last state save, green
    // context.restore();//Restore to last state save, blue
    // context.restore();//Restore to last state save, red
    boxState.render();
}