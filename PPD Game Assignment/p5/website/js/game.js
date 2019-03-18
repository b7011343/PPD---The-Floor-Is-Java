var bgCounter = 0
var imgX1 = -1280
var imgX2 = 0
var imgX3 = 1280
var backgroundTiles = [imgX1, imgX2, imgX3]

let bg

var devMode;
var player = new Player(100,200); 
var plat1 = new Platform(100,300,50,300)
var plat2 = new Platform(650, 400, 50, 100)
var plat3 = new Platform (1100, 500, 50, 5 )

var platformList = [plat1, plat2, plat3]

preload()
{
  
}


function setup() {
  var cvs = createCanvas(1280, 720);
  //cvs.style('text-align', 'center')
  //background(0);
  //translate(0, 310)
  //player = new Character(200, 200);
  bg = loadImage('assets/bg1.png')
  setInterval(drawLava, 400);
  
}


function draw() {
  clear();
  //background(0)
  //bg.position(300,400)
  translate(-player.x+590, 0)
  
  updateBackground()
  updateGame()
  
  
}


function updateBackground()
{
  image(bg, backgroundTiles[0], 0)
  image(bg, backgroundTiles[1], 0)
  image(bg, backgroundTiles[2], 0)
  var index

  
  if (bgCounter+1 == 3)
  {
    index = 0
  }
  else{
    index = bgCounter+1
  }
  
  
  
  if(player.x > backgroundTiles[index]+600)
  {
    backgroundTiles[bgCounter] += 2560
    bgCounter++
    if (bgCounter == 3)
    {
      bgCounter = 0
    }
    
  }

}

function updateGame(){
  //drawLava()

  if (devMode)
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
  if (!devMode)
    player.x += 5
}

function keyPressed()
{
  player.jump(key);
  if (key == 'm')
    devMode = true
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






var count = 2
function drawLava()
{

  
  bg = loadImage('assets/bg'+count+'.png')
  
  if (count < 2){
    count++
  }
  else{
    count = 1
  }
  //console.info(count)
  //updateGame()
}


function death()
{
  if (player.isDead())
    {
      backgroundTiles = [imgX1, imgX2, imgX3]
      player.x = 100
      player.y = 100
    }
}