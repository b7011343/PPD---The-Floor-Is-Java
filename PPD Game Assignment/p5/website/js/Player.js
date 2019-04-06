function Player(x, y){

  // variables
  this.x = x;
  this.y = y;
  this.acceleration = 0.15
  this.velocity = 0.01
  this.mass = 1
  this.gravity = 0.15
  this.jmp = false
  this.onSurface = false
  this.length = 100
  this.impale = false

  this.display = function() { // displays the player on screen
    fill(204, 0, 0);
    rect(this.x,this.y,this.length,this.length)
  }

  this.applyGravity = function(){ // applies gravity and makes the player jump if the right key is pressed
    if (!this.onSurface)
      {
        this.velocity += this.acceleration
        this.y += this.velocity
      }
      else{
        if(this.jmp){
          this.acceleration = -1.08 //this was -1, not -1.08
          this.velocity = 0
          while(this.acceleration <= this.gravity){
            this.acceleration += 0.1
            this.velocity += this.acceleration
            this.y += this.velocity
          }
        }
        this.jmp = false
      }
  }

  this.update = function(){ // moves the player to their new position and calls applyGravity
    this.applyGravity();
    rect(this.x,this.y,this.length,this.length)
    
  }

  this.jump = function(key) // checks if the key pressed is thge jump key and the player is on a surface
  {
    if (((key == ' ') || (key == 'w')) && (this.onSurface))
      {
        this.jmp = true
        
      }
  }

  this.isDead = function() // checks if the player is dead
  {
    if (player.y+player.length > 700)
      return true;
    if (this.impale){
      this.impale = false
      return true
    }
  }

  this.move = function(){ // move player while in dev mode
    if ((keyIsDown(65))||keyIsDown(LEFT_ARROW)){
      player.x -= 5;
    }
    if ((keyIsDown(68))||keyIsDown(RIGHT_ARROW)){
      player.x += 5;
    }
  }
}