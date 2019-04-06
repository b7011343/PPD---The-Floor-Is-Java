function Spikes(x, y){
    
    // variables
    this.width = 25
    this.x1 = x 
    this.x2 = x + this.width
    this.x3 = x + (this.width/2)
    this.y1 = y
    this.y2 = y
    this.y3 = y - this.width

    

    this.display = function(){ // displays the spike on screen
        fill(220,220,220)
        strokeWeight(2)
        stroke(0)
        triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3)
        triangle(this.x2, this.y2, this.x2 + this.width, this.y2, this.x3 + this.width, this.y3)
    }

    this.collision = function(){ // checks if the player is touching the spike
        if (player.x + player.length >= this.x1 && player.x <= this.x2 + this.width && player.y + player.length >= this.y3 && player.y + player.length <= this.y1){
            player.impale = true
        }
    }
}