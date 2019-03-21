var bgCounter = 0
var imgX1 = -1280
var imgX2 = 0
var imgX3 = 1280
var backgroundTiles = [imgX1, imgX2, imgX3]
var endFlag
let bg
var deathSound
var bgMusic

var devMode;
var player = new Player(-500,200);
var levelSelector
// var plat1 = new Platform(100,300,50,300)
// var plat2 = new Platform(650, 400, 50, 100)
// var plat3 = new Platform (1100, 500, 50, 5 )

var platformList// = [plat1, plat2, plat3]

function preload()
{
  bgMusic = loadSound("assets/mainMusic.mp3")

}


function setup() {
  var cvs = createCanvas(1280, 720);
  //cvs.style('text-align', 'center')
  //background(0);
  //translate(0, 310)
  //player = new Character(200, 200);
  bg = loadImage('assets/bg/bg1.png')
  deathSound = loadSound("assets/scream.mp3")
  setInterval(drawLava, 400);
  levelSelector = new LevelSelector(0);
  levelSelector.levelSelect()
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
  if (devMode)
  {
    player.move();
    bgMusic.stop()
  }
    
  endFlag.display()
  player.display();
  player.update()
  //platform.display()
  //plat2.display()
  checkPlatforms()
  screenScroll()
  death()
  checkWin()
  displayMessage()
}

function displayMessage()
{
    textAlign(CENTER)
    ///textFont(font)
    textSize(35)

    fill(255)
    stroke(0)
    text(levelSelector.message, 640-300, 50)
    stroke(255)
}



function checkWin() //////////// needs linking to menu
{
  if (player.x >= levelSelector.endX)
    {
      console.info("Level " + levelSelector.level + " complete!")
      platformList.forEach(element => {
        element.x = 0
        element.y = -10
        element.width = 0
        element.height = 0
      });

      // we need to implement the level selection menu into this portion!

      levelSelector.level++
      levelSelector.levelSelect()
      backgroundTiles = [imgX1, imgX2, imgX3]
      player.x = -500
      player.y = 200
    }
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
      //console.info (player.x)
    }
  });
}






var count = 2
function drawLava()
{

  
  bg = loadImage('assets/bg/bg'+count+'.png')
  
  if (count < 10){
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
      bgMusic.stop()
      //bgMusic = loadSound("assets/mainMusic.mp3")
      deathSound.play()
      backgroundTiles = [imgX1, imgX2, imgX3]
      player.x = -500
      player.y = 200
      bgMusic.play()
    }
}