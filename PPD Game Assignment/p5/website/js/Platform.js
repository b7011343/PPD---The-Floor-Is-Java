function Platform(x, y, height, width){
  this.x = x
  this.y = y
  this.width = width
  this.height = height
  this.firstIteration = true

  this.display = function(){
    fill(255, 150)
    rect(this.x,this.y,this.width,this.height)
    this.collision();
  }
  
  this.collision = function(){
    if ((player.y+100 >= this.y) && (player.y+100 <= this.y+height) && (player.x+100 >= this.x) && (player.x <= this.x+width) )
    {
        player.velocity *= 0
        player.y = this.y-100
        this.firstIteration = false
    }
    else{
        if (this.firstIteration){
          player.velocity += 0.01
          this.firstIteration = true
        }
    }
    //     player.onSurface = true
    // }
    // else{
    //     player.onSurface = false
    // }
    
    // if (player.velocity != 0){
    //     player.onSurface = false
    // }
    // else{
    //     player.onSurface = true
    // }
    
  }

  
}