function EndFlag(x, y)
{
    // variables
    this.x = x
    this.y = y
    this.flagImage = loadImage("assets/flag2.png")

    this.display = function(){ // displays the end flag on the screen
        fill(0, 255, 0)
        strokeWeight(2)
        stroke(255)
        image(this.flagImage, this.x, this.y-132, this.flagImage.width/4, this.flagImage.height/4)
    }
}