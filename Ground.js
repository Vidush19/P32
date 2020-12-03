class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true,
          friction:10000000
      }
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      rectMode(CENTER);
      fill("#48FCFE");
      translate(pos.x,pos.y);
      rect(0,0, this.width, this.height);
      pop();
    }
  };
