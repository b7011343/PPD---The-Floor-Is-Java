function EndFlag(x, y)
{
    this.x = x
    this.y = y
    this.flagImage = loadImage("assets/flag2.png")

    this.display = function(){
        fill(0, 255, 0)
        strokeWeight(2)
        stroke(255)
        //circle(this.x, this.y, 50)
        image(this.flagImage, this.x, this.y-132, this.flagImage.width/4, this.flagImage.height/4)
    }
}