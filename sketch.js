var car, wall;
var speed, weight;

function setup() {
  createCanvas(1000,400);
  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(22,83);

  car = createSprite(50,130,50,50);
  car.velocityX = speed;

  wall = createSprite(750,130,40, height/3);

}

function draw() {
  background(0);  
  if(hasCollided(car, wall)){
    car.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor = "red";
    }
    if(damage<10){
      wall.shapeColor = "green";
    }
  }
  drawSprites();
}

function hasCollided(bullet, wall1){
  bulletR = bullet.x+bullet.width;
  wallL = wall1.x;
  if(bulletR >= wallL){
    return true
  }
  else{
    return false
  }
}