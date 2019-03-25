function Spikes(x, y){
    this.width = 50
    
    this.x1 = x 
    this.x2 = x + this.width
    this.x3 = x + (this.width/2)
    this.y1 = y
    this.y2 = y
    this.y3 = y - this.width

    

    this.display = function(){
        fill(220,220,220)
        strokeWeight(2)
        stroke(0)
        triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3)
    }
}