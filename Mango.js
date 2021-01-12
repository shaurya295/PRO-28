class Mango {
    constructor(x, y, width, height) {
        var options = {
            isStatic : true,
            restitution : 0,
            friction : 1
        }
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.image = loadImage("mango.png");
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        
    }

    display() {
        push();
        translate(this.x, this.y);
        imageMode(CENTER);
        image(this.image, this.x, this.y, this.width, this.height);
        pop();
    }

}