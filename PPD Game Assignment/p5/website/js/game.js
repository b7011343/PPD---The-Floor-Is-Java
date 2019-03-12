function Player(x, y){
  this.x = x;
  this.y = y;
  //this.gravity = 3
  this.acceleration = 0.15
  this.velocity = 0
  this.mass = 1
  this.gravity = 0.15
  this.jmp = false

  this.display = function() {
    fill(255, 150);
    rect(this.x,this.y,100,100)
  }

  this.applyGravity = function(){
    if (this.y <= 620)
      {
        this.velocity += this.acceleration
        this.y += this.velocity
        //console.info(this.y)
      }
      else{
        
        if(this.jmp){
          this.acceleration = -1
          this.velocity = 0
          while(this.acceleration <= this.gravity){
            this.acceleration += 0.1
            this.velocity += this.acceleration
            this.y += this.velocity
            console.info("y", this.y)
            console.info("acc", this.acceleration)
            console.info("vel", this.velocity)
          }
        }
        this.jmp = false
      }
     
  }

  this.update = function(){
    this.applyGravity();
    rect(this.x,this.y,100,100)
    
  }
  this.jump = function(key)
  {
    if (((key == ' ') || (key == 'w')) && (this.y >= 550))
      {
        this.jmp = true
      }
  }

  this.move = function(){
  if ((keyIsDown(65))||keyIsDown(LEFT_ARROW)){
    player.x -= 5;
  }
  if ((keyIsDown(83))||keyIsDown(DOWN_ARROW)){  //crouch/fall
    player.y += 0;
  }
  if ((keyIsDown(68))||keyIsDown(RIGHT_ARROW)){
    player.x += 5;
  }
}

}

var player = new Player(100,100); 


function setup() {
  createCanvas(1280, 720);
  background(0);
  //translate(0, 310)
  //player = new Character(200, 200);
}


function draw() {
  
  clear();
  background(0)
  player.move();
  player.display();
  player.update()
  
}


function keyPressed()
{
  player.jump(key);
}


