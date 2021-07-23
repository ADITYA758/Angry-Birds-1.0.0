class Pig extends BaseClass {
  constructor(x, y) {
    super(x, y, 50, 50);
    this.image = loadImage("sprites/enemy.png");
    this.visible=false;
  }
  display() {

    if ((this.body.speed) < 2.5) {
      super.display();
    } else {
      if (this.visible===false)
     {
        World.remove(world, this.body)
        text(score=score+50);
        this.visible=true
        
     }

    }
  }
};


