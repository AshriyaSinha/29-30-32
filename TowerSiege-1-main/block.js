class Block {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.4,
        'friction':0,
        //'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.visibility = 255;
    
    World.add(world, this.body);
  }
  display(){
    if(this.body.speed < 3){
    push();
    var pos =this.body.position;
    translate(pos.x,pos.y);
    rotate(this.body.angle);
    rectMode(CENTER);
    fill("pink");
    rect(0, 0, this.width, this.height);
    pop();
  }
  else {
    World.remove(world,this.body)
    push();
    this.visibility = this.visibility - 5
    pop();  
  }
}

score (){
  if(this.visibility < 0 && this.visibility > -105){
    score++
  }
}
};
