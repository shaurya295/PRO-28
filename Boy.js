class Boy {
    constructor(x, y, width, height) {
        var options = {
            isStatic : true
        }

            this.image = loadImage("boy.png");
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;

    }

        display() {
            imageMode(CENTER);
            image(this.image, this.x, this.y, this.width, this.height);
        }

}