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

    var canvas = undefined;
    var context = undefined;
    var box = undefined;
    var ball = undefined;
    var triangle = undefined;
    var boxState = undefined;
    var width = window.innerWidth;
    var height = window.innerHeight;
    var x = 20;
    var y = 20;

    canvas = createCanvas(width, height);
    context = canvas.getContext('2d');

    width = 80;
    height = 80;

    box = new Box(x, y, width, height, 'red');
    x += 100;
    ball = new Ball(x, y, width, 'blue');
    x += 100;
    triangle = new Triangle(x, y, width, 'green');
    x += 100;
    boxState = new Box(x, y, width, height, 'yellow');

    function update() {

        context.fillStyle = box.color;
        box.draw(context);
        context.save(); // Saves a state to the stack with the current propeties. fillStyle = 'red'

        context.fillStyle = ball.color;
        ball.draw(context);
        context.save();// Saves a state to the stack with the current propeties. fillStyle = 'blue'

        context.fillStyle = triangle.color;
        triangle.draw(context);
        context.save();// Saves a state to the stack with the current propeties. fillStyle = 'green'

        context.fillStyle = boxState.color;//Yellow color

        //context.restore();//Restore to last state save, green
        //context.restore();//Restore to last state save, blue
        //context.restore();//Restore to last state save, red
        boxState.draw(context);

        requestAnimationFrame(update);
    }

    update();
}

function createCanvas(width, height) {
    var canvas = document.createElement('canvas');
    canvas.style.position = 'absolute';
    canvas.width = width;
    canvas.height = height;
    canvas.style.left = '0px';
    canvas.style.top = '0px';
    canvas.style.background = '#f6e6ca';
    document.body.appendChild(canvas);
    return canvas;
}