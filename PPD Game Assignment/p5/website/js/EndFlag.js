function EndFlag(x, y)
{
    this.x = x
    this.y = y

    this.display = function(){
        fill(0, 255, 0)
        strokeWeight(2)
        stroke(255)
        circle(this.x, this.y, 50)
    }
}