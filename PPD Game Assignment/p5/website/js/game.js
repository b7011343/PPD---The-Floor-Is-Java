


var player = new Player(100,200); 
var platform = new Platform(100,300,50,200)
<<<<<<< Updated upstream
var plat2 = new Platform(650, 400, 50, 100)
var plat3 = new Platform (1000, 500, 50, 5 )

var platformList = [platform, plat2, plat3]
=======
var plat2 = new Platform(500, 400, 50, 100)
var platformList = [platform, plat2]
>>>>>>> Stashed changes


function setup() {
  createCanvas(1280, 720)
  background(0)
  //translate(0, 310)
  //player = new Character(200, 200);
  setInterval(drawLava, 250)
}


function draw() {
  clear();
  background(0)
<<<<<<< Updated upstream
  translate(-player.x+590, 0)
=======
>>>>>>> Stashed changes
  updateGame()

}

function updateGame(){
  //drawLava()

  //player.move();
  player.display();
  player.update()
  //platform.display()
  //plat2.display()
  checkPlatforms()
<<<<<<< Updated upstream
  //screenScroll()
  
}

function screenScroll(){
  translate(player.x-300, 0)
}

=======
  screenScroll()
  //death()

}

>>>>>>> Stashed changes
function keyPressed()
{
  player.jump(key)
}



function screenScroll(){
  platformList.forEach(element => {
    element.x -= 5
  })
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
