



var player = new Player(100,200); 
var platform = new Platform(100,300,50,200)
var plat2 = new Platform(650, 400, 50, 100)
var plat3 = new Platform (1000, 500, 50, 5 )

var platformList = [platform, plat2, plat3]

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
  translate(-player.x+590, 0)
  updateGame()
 

}

function updateGame(){
  //drawLava()

  player.move();
  player.display();
  player.update()
  //platform.display()
  //plat2.display()
  checkPlatforms()
  screenScroll()
  death()
}

function screenScroll(){
  translate(player.x-300, 0)
  player.x += 5
}

function keyPressed()
{
  player.jump(key);
}

function checkPlatforms()
{
  player.onSurface = false
  platformList.forEach(element => {
    element.display()
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
  //console.info(count)
  updateGame()
}


function death()
{
  if (player.isDead())
    {
      player.x = 100
      player.y = 100
    }
}