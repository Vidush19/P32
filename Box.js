class Box{
    constructor(x,y,width,height){
        var options = {
            isStatic:false,
            restitution:0,
            friction:0,
            density:1.0
        }
        this.image = loadImage("pin.png");
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        translate(pos.x,pos.y);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}