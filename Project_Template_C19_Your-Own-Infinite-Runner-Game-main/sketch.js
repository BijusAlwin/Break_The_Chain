
var  vac,vacIMG,vacGroup
var PLAY= 1
var END = 0
var gameState = PLAY
var score = 0
var you
var obstacle,obstacleGroup,obstacleIMG
var sky,skyIMG
var player,playerIMG

function preload(){
playerIMG = loadImage("Player.png")
skyIMG = loadImage("Background.png")
obstacleIMG = loadImage("Obstacle.png")
vacIMG=loadImage("Mask Button.png")
youIMG=loadImage("you won.jpg")

}

function setup() {
    createCanvas(windowWidth,windowHeight)
 


sky = createSprite(500,400)
sky.addImage(skyIMG)
sky.x = sky.width/2
sky.scale=1

 obstacle= createSprite(1000000000000000000000,100000000000000000000000000)

player = createSprite(75,300)
 player.addImage(playerIMG)
 player.scale=0.2


obstacleGroup= new Group()



}

function draw() {
background(180)

obstacle.lifetime=600

console.log(score)
    if(obstacleGroup.isTouching(player)){
       gameState=END
       
      
            }
if(player.y>=700 || player.y<=0){
 gameState=END
               
 }
 if (gameState===PLAY){
    background(0)
    sky.velocityX= -(4+3*score/250)
    obstacle.velocityX= -(4+3*score/250)
    score=score + Math.round(frameCount/240)

          obstacle.debug=true
          player.setCollider("circle",0,0,300)
          obstacle.setCollider("circle",0,0,300)
    
        player.velocityY=player.velocityY+=0.8
        sky.velocityX=-2
    
        if(sky.x <600 )(
            sky.x = sky.width/2
        )
        if ( keyDown("up_arrow")){
            player.velocityY-=2
        }

        

   

    

    
    if (frameCount%90===0){
        obstacle = createSprite(1400,-100)
        obstacle.addImage(obstacleIMG)
        obstacle.scale=0.2
        obstacle.velocityX=-4
    
    obstacle.y=Math.round(random(650,50))
    obstacleGroup.add(obstacle)
       
 
    }

    drawSprites()
 }
 else if(gameState===END){

background(0)

    sky.velocityX=0
    sky.destroy()
    obstacleGroup.setVelocityEach(0)
   player.destroy()
    obstacleGroup.destroyEach()
  
    textSize(35)
    if(score<=2000 &&  player.y>=700 || player.y<=0 ){
        fill("yellow")
   text("You are so irresposible (you crashed). I cant belive you got a low score of "+score , 100,230)
    }
    else if (score>=2001 && player.y>=700 || player.y<=0 ){
        fill("yellow")
        text(" I cant belive you got a pretty good score of "+ score,230,230) 
         you=createSprite(700,500)
         you.addImage(youIMG)
       drawSprites()
    }
textSize(35)
drawSprites() 
fill("yellow")
if (score>=1001){
text("GAME OVER. SCORE " + score,500,200)
text("GG(YOU WIN) ",500,300)
you=createSprite(700,500)
you.addImage(youIMG)
drawSprites()
}
 }
  
    
    drawSprites()

    textSize(30)
 
    fill("black")
    text(" Score :" + score,1100,80)
 
}


