// Menu Variables
menuFlag = 0   // 0 = Menu      1 = Level Selection Screen      2 = Game
btnBack = new Button(10, 660, 100, 50, 255, 97, 48, "<=Back")
btnBackHS = new Button(10, 660, 100, 50, 255, 97, 48, "<=Back")
// Button(x, y, width, height, fillR, fillG, fillB, message)
// Menu Buttons
var btnPlay = new Button(490, 250, 300, 100, 255, 97, 48, "Play")
var btnHighscores = new Button(490, 400, 300, 100, 255, 97, 48, "Highscores")


// Level Selection Menu Buttons
var btnLevel0 = new Button(490, 210, 300, 50, 255, 97, 48, "Tutorial")
var btnLevel1 = new Button(490, 270, 300, 50, 255, 97, 48, "Level 1")
var btnLevel2 = new Button(490, 330, 300, 50, 255, 97, 48, "Level 2")
var btnLevel3 = new Button(490, 390, 300, 50, 255, 97, 48, "Level 3")
var btnLevel4 = new Button(490, 450, 300, 50, 255, 97, 48, "Level 4")

// Game Buttons
var btnQuit = new Button(10, 660, 150, 50, 255, 97, 48, "Quit")
var btnMute = new Button(1120, 660, 150, 50, 255, 97, 48, "Mute")


// Game Variables
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
var levelSelector
var player = new Player(-500,200); 
var HS = new Highscore(1)
var platformList
var spikeList
let menuBG
var muteFlag = true
var mX = mouseX
var currentLevel = 1


function preload()
{
  bgMusic = loadSound("assets/mainMusic.mp3")
  deathSound = loadSound("assets/scream.mp3")
}

function setup() {
  createCanvas(1280, 720);
  bg = loadImage('assets/bg/bg1.png')
  deathSound = loadSound("assets/scream.mp3")
  menuBG = loadImage('assets/bg/menuBG.jpg')
  
  switch(menuFlag)
  {
    case 0:
    {
      break;
    }
    
    case 1:
    {
      break;
    }
    
    case 2:
    {
      setInterval(drawLava, 400);
      levelSelector = new LevelSelector(0);
      levelSelector.levelSelect()
      //frameRate(120)
      bgMusic.play()
      break;
    }

    case 3:{
      
    }
  }
}

function draw() {
  clear();
  
  switch(menuFlag)
  {
    case 0:
    {
      image(menuBG, 0, 0)
      btnPlay.display()
      btnHighscores.display()
      hideLevelMenuButtons()
      hideGameButtons()
      break;
    }
    
    case 1:
    {
      image(menuBG, 0, 0)
      hideMenuButtons()
      hideGameButtons()
      btnLevel0.display()
      btnLevel1.display()
      btnLevel2.display()
      btnLevel3.display()
      btnLevel4.display()
      btnBack.display()
      break;
    }
    
    case 2:
    {
      translate(-player.x+590, 0)
      mX = (mouseX+player.x-590)
      updateBackground()
      updateGame()
      break;
    }
    case 3:{
      image(menuBG, 0, 0)
      hideMenuButtons()
      hideGameButtons()
      btnBackHS.display()

    }
  }
}

function hideMenuButtons()
{
  btnPlay.visible = false
  btnHighscores.visible = false
}

function hideLevelMenuButtons()
{
  btnLevel0.visible = false
  btnLevel1.visible = false
  btnLevel2.visible = false
  btnLevel3.visible = false
  btnLevel4.visible = false
}

function hideGameButtons()
{
  btnMute.visible = false
  btnQuit.visible = false
}

function startLevel(level)
{
    menuFlag = 2
    setup()
    levelSelector.level = level
    levelSelector.levelSelect()
}

function mousePressed()
{
  if (btnPlay.overButton())
  {
    menuFlag = 1
    setup()
  }
  if (btnHighscores.overButton()){
    menuFlag = 3
    setup()
  }
  
  if (btnBackHS.overButton())
  {
    console.log("got here")
    menuFlag = 0
    setup()
  }
  if (menuFlag == 1){
    if (btnBack.overButton())
    {
      console.log("got here")
      menuFlag = 0
      setup()
    }
    if (btnLevel0.overButton())
    {
      startLevel(0)
    }
    if (btnLevel1.overButton())
    {
      startLevel(1)
    }
    if (btnLevel2.overButton())
    {
      startLevel(2)
    }
    if (btnLevel3.overButton())
    {
      startLevel(3)
    }
    if (btnLevel4.overButton())
    {
      startLevel(4)
    }
  }
  else{
    if (btnMute.overButton())
      {
        if (bgMusic.isPlaying())
          {
            bgMusic.stop()
            muteFlag = false
          }
        else{
          bgMusic.loop()
          muteFlag = true
        }
      }
    if(btnQuit.overButton())
      {
        console.info("quit ")
        backgroundTiles = [imgX1, imgX2, imgX3]
        player.x = -500
        player.y = 200
        menuFlag = 1
        setup()
      }
  }
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
  hideLevelMenuButtons()
  hideMenuButtons()
  endFlag.display()
  player.display();
  player.update() 
  btnMute.display()
  btnMute.x = player.x+530
  btnQuit.display()
  btnQuit.x = player.x-575
  HS.updateScore()

  checkPlatforms()
  displaySpikes()
  screenScroll()
  death()
  checkWin()
  displayMessage()


}

function keyPressed()
{
  player.jump(key);
  if (key == 'm')
    devMode = true
}
function displayMessage()
{
  textAlign(CENTER)
    textSize(35)
    fill(255)
    stroke(0)
    text(levelSelector.message, 640-300, 50)
    stroke(255)
}



function checkWin() 
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
      bgMusic.stop()
      menuFlag = 1
      setup()
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

function displaySpikes(){
  spikeList.forEach(element => {
    element.display()
    element.collision()
  })
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
 
}


function death()
{
  
  if (player.isDead())
    {
      bgMusic.stop()
      
      deathSound.play()
      backgroundTiles = [imgX1, imgX2, imgX3]
      player.x = -500
      player.y = 200
      if (muteFlag)
        {
          bgMusic.play()
        }
    }
}