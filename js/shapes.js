function Box(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
}

Box.prototype.draw = function (context) {
    context.fillRect(this.x, this.y, this.width, this.height);
}

function Ball(x, y, size, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
}

Ball.prototype.draw = function (context) {
    context.beginPath();
    context.arc((this.x + (this.size / 2)), (this.y + (this.size / 2)), (this.size / 2), 0, (2 * Math.PI), false);
    context.closePath();
    context.fill();
}

function Triangle(x, y, size, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
}

Triangle.prototype.draw = function (context) {
    context.beginPath();
    context.moveTo((this.x + (this.size / 2)), this.y);
    context.lineTo((this.x + this.size), (this.y + this.size));
    context.lineTo(this.x, (this.y + this.size));
    context.closePath();
    context.fill();
}
