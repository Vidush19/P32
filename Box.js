class Box{
    constructor(x,y,width,height){
        var options = {
            isStatic:false,
            restitution:0,
            friction:0,
            density:1.0
        }
        this.image = loadImage("pin.png");
        this.image1 = loadImage("shape.png");
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        World.add(world,this.body);
    }
    display(){
        if(this.body.speed<5){
            var pos = this.body.position;
            push();
            imageMode(CENTER);
            translate(pos.x,pos.y);
            image(this.image,0,0,this.width,this.height);
            pop();
        }
        else{
            push();
            var pos = this.body.position;
            World.remove(world,this.body);
            this.Visiblity -= 1;
            tint(255,this.Visiblity);
            image(this.image1,pos.x,pos.y,25,60);
            pop();
        }
    }
}