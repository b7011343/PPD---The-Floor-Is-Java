function Button(x, y, width, height, fillR, fillG, fillB, message)
{
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.fillR = fillR;
    this.fillG = fillG;
    this.fillB = fillB;
    this.message = message;

    this.display = function()
    {
        var strokeColour = 0
        strokeWeight(3)
        if (this.overButton() == true)
        {
            strokeColour = 255
        }
        stroke(strokeColour)
        
        fill(this.fillR, this.fillG, this.fillB)
        rect(this.x, this.y, this.width, this.height)
        strokeWeight(0)
        fill(255)
        fill(0)
        textSize(this.height/2)
        textAlign(CENTER)
        text(this.message, this.x+(this.width/2), this.y+(1.3*this.height/2))
        
        
    }

    this.overButton = function()
    {
       return ((mouseX >= this.x) && (mouseX <= this.x+this.width) && (mouseY >= this.y) && (mouseY <= this.y+height));
    }
}