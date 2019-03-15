



var player = new Player(100,100); 
var platform = new Platform(100,300,50,200)
var plat2 = new Platform(500, 400, 50, 100)

var platformList = [platform, plat2]

function setup() {
  createCanvas(1280, 720);
  background(0);
  //translate(0, 310)
  //player = new Character(200, 200);
}


function draw() {
  
  clear();
  background(0)

  updateGame()
 

}

function updateGame(){
  player.move();
  player.display();
  player.update()
  platform.display()
  
  plat2.display()
  checkPlatforms()
}
function keyPressed()
{
  player.jump(key);
}

function checkPlatforms()
{
  player.onSurface = false
  platformList.forEach(element => {
    if (element.hasPlayerOn)
    {
      player.onSurface = true
    }
  });
}
