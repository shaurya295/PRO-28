class Stone {
    constructor(x, y, width, height) {
        var options = {
            isStatic : false,
            restitution : 0,
            friction : 1,
            density : 1.2
        }

        this.body   = Bodies.rectangle(x, y, width, height, options);
        this.image  = loadImage("stone.png");
        this.x      = x;
        this.y      = y;
        this.width  = width;
        this.height = height;
        World.add(world,this.body);
        
    }

            display() {
                push();
                this.body.position.x = mouseX;
                this.body.position.y = mouseY;
                translate(this.body.position.x, this.body.position.y);
                imageMode(CENTER);
                image(this.image, this.x, this.y, this.width, this.height);
                pop();
            }
}