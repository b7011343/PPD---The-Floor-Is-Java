



var player = new Player(100,100); 
var platform = new Platform(100,300,50,200)
var plat2 = new Platform(500, 400, 50, 100)

var platformList = [platform, plat2]

function setup() {
  createCanvas(1280, 720);
  background(0);
  //translate(0, 310)
  //player = new Character(200, 200);
  setInterval(drawLava, 250);

}


function draw() {
  
  clear();
  background(0)
  
  updateGame()
 

}

function updateGame(){
  //drawLava()

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



var count = 1
function drawLava()
{
  var x = 0
  var y = 650
  var lava = createImg("assets/lava/"+count+".png")
  lava.position(x,y)
  lava.size(1280,151)
  if (count < 10){
    count++
  }
  else{
    count = 1
  }
  console.info(count)
  updateGame()
}
