function Platform(x, y, height, width){

  // variables
  this.x = x
  this.y = y
  this.width = width
  this.height = height
  this.endX = x + width
  this.firstIteration = true
  this.hasPlayerOn = false

  this.display = function(){ // displays the playform on the screen
    fill(51, 51, 255)
    strokeWeight(2)
    stroke(255)
    rect(this.x,this.y,this.width,this.height)
    this.collision();
  }
  
  this.collision = function(){ // checks if the player is touching the platform
    if ((player.x+ player.length == this.x) && (player.y < this.y+height) && (player.y+player.length > this.y))
    {
      player.x-=5
    }
    if ((player.y+100 >= this.y) && (player.y+100 <= this.y+height) && (player.x+100 >= this.x) && (player.x <= this.x+width) ) 
    {
        player.velocity *= 0
        player.y = this.y - player.length
        this.firstIteration = false
        this.hasPlayerOn = true
    }
    else{
        this.hasPlayerOn = false
        if (this.firstIteration){
          player.velocity += 0.01
          this.firstIteration = true
        }
    }
  }  
}