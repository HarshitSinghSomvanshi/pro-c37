var backGround;
var player;
var ground;
var obstaclesGroup, obstacle;   
var object,objectGroup;
var score=0;




function setup() {
  createCanvas(800,400);
  
  
  player = createSprite(120,340,60,250);
  player.scale = 0.2;
  
  ground = createSprite(400,350,1600,10);
  ground.velocityX=-4;
  ground.visible=true;

  objectGroup = new Group();
  obstaclesGroup = new Group();
  
  score = 0;
}

function draw() {
  
  background(220);
  
    
  if(ground.x<0) {
    ground.x=400 ;
  }
  
    if(objectGroup.isTouching(player)){
      objectGroup.destroyEach();
    score = score + 2;
    }
    switch(score){
        case 10: player.scale=0.20;
                break;
        case 20: player.scale=0.24;
                break;
        case 30: player.scale=0.28;
                break;
        case 40: player.scale=0.36;
                break;
        default: break;
    }
  
    if(keyDown("space")&&player.y>=250) {
      player.velocityY = -11;
    }
    player.velocityY = player.velocityY + 0.9;
  
    player.collide(ground);
  
   spawnobject();
    spawnObstacles();
 
    if(obstaclesGroup.isTouching(player)){ 
        player.scale=0.08;
     // score=score-2;
    }
  
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 400,50);
}

function spawnobject() {
  //write code here to spawn the food
  if (frameCount % 80 === 0) {
    var object = createSprite(600,250,100,50);
    object.y = random(120,200);    
    object.scale = 0.3;
    object.velocityX = -5;
     //assign lifetime to the variable
    object.lifetime = 300;
    player.depth = object.depth + 1;
    
    //add each banana to the group
    objectGroup.add(object);
  }
}

function spawnObstacles() {
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(800,350,10,40);
    obstacle.velocityX = -6;
    
    //assign scale and lifetime to the obstacle     
    obstacle.scale = 0.6 ;
    obstacle.lifetime = 300;
    
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}


  
