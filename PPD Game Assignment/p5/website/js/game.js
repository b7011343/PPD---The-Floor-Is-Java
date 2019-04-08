// Menu Variables
menuFlag = 0   // 0 = Menu      1 = Level Selection Screen      2 = Game
btnBack = new Button(10, 660, 100, 50, 255, 97, 48, "<=Back") // button to leave the level selector
btnBackHS = new Button(10, 660, 100, 50, 255, 97, 48, "<=Back") // button to leave the higscore menu

// Menu Buttons
var btnPlay = new Button(490, 250, 300, 100, 255, 97, 48, "Play") // button to get to the level selctor
var btnHighscores = new Button(490, 400, 300, 100, 255, 97, 48, "Highscores") // button to get to the highscore screen


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
var HS
var platformList
var spikeList
let menuBG
var muteFlag = true
var mX = mouseX
var activeLevel
var onScreenAttempts

// unlocked levels
var Level 

// attempts for each level before completed
var lvl1Highscore
var lvl2Highscore
var lvl3Highscore
var lvl4Highscore


function preload() // load assets and local storage
{
  bgMusic = loadSound("assets/mainMusic.mp3")
  deathSound = loadSound("assets/scream.mp3")

  //if (1 >= parseInt(localStorage.getItem('lvl')) >= 4)
  if (isNaN(parseInt(localStorage.getItem('lvl'))))
  {
      localStorage.setItem('lvl', 1)
      Level = parseInt(localStorage.getItem('lvl'))
  }
  else
  {
    Level = parseInt(localStorage.getItem('lvl'))
  }
  HS = new Highscore(Level)
  importUserSave()
}

function setup() { // setup assets and navigate menus
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
    
    // menuFlag for the level
    case 2:
    {
      setInterval(drawLava, 400);
      levelSelector = new LevelSelector(0);
      levelSelector.levelSelect()
      bgMusic.play()
      break;
    }

    case 3:{
      break;
    }
  }
}

function draw() { // draw loop - called 60 times per second
  clear(); // clears the screen
  
  switch(menuFlag) // used to toggle button visibility
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

      importUserSave()
      

      updateBackground()
      updateGame()
      break;
    }
    case 3:{
      image(menuBG, 0, 0)
      hideMenuButtons()
      hideGameButtons()
      btnBackHS.display()
      updateHighScores()
    }
  }
}

function updateHighScores() // get highscore from local storage and display on the highscore screen
{
  fill(255, 97, 48)
  stroke(0)
  strokeWeight(3)
  rect(350, 230, 565, 410)
  strokeWeight(0)
  fill(0)
  textSize(50)
  textAlign(CENTER)

  if (Level > 4)
  {
    text("GAME COMPLETE!", 640, 300)
  }
  else{
    text("Current Level: " + Level, 640, 300)
  }
  text("Attempts To Complete: ", 640, 375)
  textAlign(LEFT)
  text("-Level 1:    " + lvl1Highscore, 400, 435)
  if (Level < 2)
  {
    lvl2Highscore = "🔒"
  }
  text("-Level 2:    " + lvl2Highscore, 400, 495)
  if (Level < 3)
  {
    lvl3Highscore = "🔒"
  }
  text("-Level 3:    " + lvl3Highscore, 400, 555)
  if (Level < 4)
  {
    lvl4Highscore = "🔒"
  }
  text("-Level 4:    " + lvl4Highscore, 400, 615)
}

function importUserSave() // get the users previous data from local storage
{
    lvl1Highscore = parseInt(localStorage.getItem('lvl1'))
    lvl2Highscore = parseInt(localStorage.getItem('lvl2'))
    lvl3Highscore = parseInt(localStorage.getItem('lvl3'))
    lvl4Highscore = parseInt(localStorage.getItem('lvl4'))
    
  if ((isNaN(lvl1Highscore))||(isNaN(lvl2Highscore))||(isNaN(lvl3Highscore))||(isNaN(lvl4Highscore)))
    {

      console.info("test2")
      localStorage.setItem('lvl1', 0)
      localStorage.setItem('lvl2', 0)
      localStorage.setItem('lvl3', 0)
      localStorage.setItem('lvl4', 0)
    
      lvl1Highscore = parseInt(localStorage.getItem('lvl1'))
      lvl2Highscore = parseInt(localStorage.getItem('lvl2'))
      lvl3Highscore = parseInt(localStorage.getItem('lvl3'))
      lvl4Highscore = parseInt(localStorage.getItem('lvl4'))
    }
}

function hideMenuButtons() // hides buttons on the main menu
{
  btnPlay.visible = false
  btnHighscores.visible = false
}

function hideLevelMenuButtons() // hides buttons on the level selector
{
  btnLevel0.visible = false
  btnLevel1.visible = false
  btnLevel2.visible = false
  btnLevel3.visible = false
  btnLevel4.visible = false
}

function hideGameButtons() // hides buttons seen during gameplay
{
  btnMute.visible = false
  btnQuit.visible = false
}

function startLevel(level) // starts level after button is clicked
{
    menuFlag = 2
    setup()
    levelSelector.level = level
    levelSelector.levelSelect()
}

function mousePressed() // only called when the mouse is clicked
{
  // checks to see if the mouse is clicked over a button
  if (btnPlay.overButton())
  {
    menuFlag = 1
    setup()
  }
  if (btnHighscores.overButton()){
    menuFlag = 3
    importUserSave()
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
      activeLevel = 0
    }
    if (btnLevel1.overButton())
    {
      startLevel(1)
      activeLevel = 1
    }
    if (btnLevel2.overButton())
    {
      if(Level >= 2)
      {
        startLevel(2)
        activeLevel = 2
      }
      else{
        alert("You have not completed level 1 yet!")
      }
    }
    if (btnLevel3.overButton())
    {
      if(Level >= 3)
      {
        startLevel(3)
        activeLevel = 3
      }
      else{
        alert("You have not completed level 2 yet!")
      }
    }
    if (btnLevel4.overButton())
    {
      if(Level >= 4)
      {
        startLevel(4)
        activeLevel = 4
      }
      else{
        alert("You have not completed level 3 yet!")
      }
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
        bgMusic.stop()
        setup()
      }
  }
}

function updateBackground() // moves the background with the player
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

function updateGame(){ // called every game loop -- used to update and chack the state of the game
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
  importUserSave()
  checkPlatforms()
  displaySpikes()
  screenScroll()
  death()
  checkWin()
  displayMessage()
}

function keyPressed() // only called when a key is pressed
{
  player.jump(key);
  if (key == 'm')
    devMode = true // dev mode stopes the screen scolling
}

function displayMessage() // displays the current level at the top of the screen
{
  textAlign(CENTER)
    textSize(35)
    fill(255)
    stroke(0)
    text(levelSelector.message, 640-300, 50)


    switch (activeLevel)
    {
      case 1:
      {
        onScreenAttempts = lvl1Highscore
        break;
      }
      case 2:
      {
        onScreenAttempts = lvl2Highscore
        break;
      }
      case 3:
      {
        onScreenAttempts = lvl3Highscore
        break;
      }
      case 4:
      {
        onScreenAttempts = lvl4Highscore
        break;
      }
      default:
      break;
    }
    textAlign(RIGHT)
    if ((activeLevel != 0) && (activeLevel >= Level))
    {
      text("Attempts: " + onScreenAttempts, -75, 50)
    }
    else if (activeLevel != 0){
      fill(0, 255, 0)
      text("COMPLETE!", -75, 50)
      fill(255)
    }
    stroke(255)
}

function checkWin() // checks to see if the player is past the end flag's x coordinate 
{
  if (player.x >= levelSelector.endX)
    {
      HS.incrementLevel()
      
      Level = HS.currentLevel
      HS.updateLocalStorage()
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

function screenScroll(){ // scrolls the scrren
  translate(player.x-300, 0)
  if (!devMode)
    player.x += 5
}

function checkPlatforms() // loops through the plaform list displaying and checking if the player is on a platform
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

function displaySpikes(){ // loops through the spike list displaying and killing the player if they are toughing the spike
  spikeList.forEach(element => {
    element.display()
    element.collision()
  })
}

var count = 2
function drawLava() // draws the lava at the bottom of the screen
{
  bg = loadImage('assets/bg/bg'+count+'.png')
  
  if (count < 10){
    count++
  }
  else{
    count = 1
  }
}

function death() // checks if the player is dead
{
  if (player.isDead())
    {
      HS.updateLocalStorage()
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