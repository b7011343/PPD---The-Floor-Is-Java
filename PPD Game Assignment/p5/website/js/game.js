function Player(x, y){
  this.x = x;
  this.y = y;
  //this.gravity = 3
  this.acceleration = 0.15
  this.velocity = 0
  this.mass = 1

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
        this.y = 620
         this.velocity = 0
        
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
        this.y -= 70
      }
  }

  this.move = function(){
  if ((keyIsDown(65))||keyIsDown(LEFT_ARROW)){
    player.x -= 1;
  }
  if ((keyIsDown(83))||keyIsDown(DOWN_ARROW)){  //crouch/fall
    player.y += 1;
  }
  if ((keyIsDown(68))||keyIsDown(RIGHT_ARROW)){
    player.x += 1;
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


