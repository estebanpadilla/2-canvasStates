function Box(x, y, width, height, color, context) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.context = context;
}

Box.prototype.render = function () {
    this.context.fillRect(this.x, this.y, this.width, this.height);
}