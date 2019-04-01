function Player(x, y){
  this.x = x;
  this.y = y;
  //this.gravity = 3
  this.acceleration = 0.15
  this.velocity = 0.01
  this.mass = 1
  this.gravity = 0.15
  this.jmp = false
  this.onSurface = false
  this.length = 100
  this.impale = false
  

  

  this.display = function() {
    fill(204, 0, 0);
    rect(this.x,this.y,this.length,this.length)
  }

  this.applyGravity = function(){
      //console.info(this.velocity)
      /*
      if (this.velocity == 0)
        this.onSurface = true
      else
        this.onSurface = false
      */
    
      
    if (!this.onSurface)
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
            //console.info("y", this.y)
            //console.info("acc", this.acceleration)
            //console.info("vel", this.velocity)
          }
        }
        this.jmp = false
      }
     
  }

  this.update = function(){
    this.applyGravity();
    rect(this.x,this.y,this.length,this.length)
    
  }
  this.jump = function(key)
  {
    if (((key == ' ') || (key == 'w')) && (this.onSurface))
      {
        this.jmp = true
        
      }
  }

  this.isDead = function()
  {
    if (player.y+player.length > 700)
      return true;
    if (this.impale){
      this.impale = false
      return true
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