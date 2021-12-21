
var backgroundImg, fireboltImg, spaceShipImg
var background1, spaceship, astronautImg, astronaut;
var ground;

function preload(){
  backgroundImg = loadImage("./Assets/scifi_wallpaper.png")
  fireboltImg = loadImage("./Assets/firebolt.png")
  spaceShipImg = loadImage("./Assets/spaceship.png")
  astronautImg = loadImage("./Assets/astronaut.png")
}

function setup() {
  createCanvas(800,400);
  background1 = createSprite(400,200, 800,400)
  background1.addImage(backgroundImg)
  background1.scale = .5

  spaceship = createSprite(100,100)
  spaceship.addImage(spaceShipImg)
  spaceship.scale = .20

  astronaut = createSprite(150,160)
  astronaut.addImage(astronautImg);
  astronaut.scale = .3

  ground = createSprite(400,350,800,1)
}

function draw() {
  background(255,255,255);  
  drawSprites();

  astronautControls();
}

function astronautControls(){
  if(keyIsDown(DOWN_ARROW)){
    astronaut.position.y = astronaut.position.y + 3
  }

  if(keyIsDown(UP_ARROW)){
    astronaut.position.y = astronaut.position.y - 3
  }

  if(keyIsDown(LEFT_ARROW)){
    astronaut.position.x = astronaut.position.x - 3
  }

  if(keyIsDown(RIGHT_ARROW)){
    astronaut.position.x = astronaut.position.x + 3
  }
}