var bow , arrow,  scene;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var score;

var arrow_group, balloon_group1, balloon_group2, balloon_group3, balloon_group4;


function preload()
{
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
}



function setup() 
{
  createCanvas(400, 400);
  
  //crie o fundo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5;
  
  // criando arco para a flecha
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;

  arrow_group = new Group();
  balloon_group1 = new Group();
  balloon_group2 = new Group();
  balloon_group3 = new Group();
  balloon_group4 = new Group();
  
  score = 0;   
}

function draw() 
{
  fill("black");
  text("score:" + score, 300,20);
  // chão em movimento
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //arco em movimento
  bow.y = World.mouseY
  
   // soltar arco quando a tecla espaço for pressionada
  if (keyDown("space")) 
  {
    createArrow();
    
  }
   
  //criando inimigos continuamente
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) 
  {
   switch(select_balloon)
   {
    case 1:redBalloon();
    break;
    case 2:blueBalloon();
    break;
    case 3:greenBalloon();
    break;
    case 4:pinkBalloon();
    break;
    default:break;
  }
  }

  if(arrow_group.isTouching(balloon_group1))
  {
    balloon_group1.destroyEach()
  }

  if(arrow_group.isTouching(balloon_group2))
  {
    balloon_group2.destroyEach()
  }

  if(arrow_group.isTouching(balloon_group3))
  {
    balloon_group3.destroyEach()
  }

  if(arrow_group.isTouching(balloon_group4))
  {
    balloon_group4.destroyEach()
  }

  
  drawSprites();
}


// Criar flechas para o arco
 function createArrow() 
 {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrow_group.add(arrow)
}

function redBalloon() 
{
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  balloon_group1.add(red);
}

function blueBalloon() 
{
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  balloon_group2.add(blue);
}

function greenBalloon() 
{
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  balloon_group3.add(green);
}

function pinkBalloon() 
{
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1;
  balloon_group4.add(pink);
}