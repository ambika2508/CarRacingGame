class Game {
  constructor(){
    
    
  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    car1 = createSprite(100,200);
    car2 = createSprite(300,200);
    car3 = createSprite(500,200);
    car4 = createSprite(700,200);
    cars = [car1,car2,car3,car4]

    car1.addImage("c1",car1img)
    car2.addImage("c2",car2img)
    car3.addImage("c3",car3img)
    car4.addImage("c4",car4img)
    
    //ground = addImage(ground)
  }

  play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerInfo();
    player.getRank();


    if(allPlayers !== undefined){
     background(ground)
     image(track, 0, -innerHeight*4, innerWidth, innerHeight*5)

      var index = 0;
      var x = 160;
      var y 
      for(var plr in allPlayers){
        textSize(24);
        fill(255);
       
        index = index+1
        x = x+200
        y = innerHeight - allPlayers[plr].distance
       cars[index-1].x = x
       cars[index-1].y = y
       text(allPlayers[plr].name, x-30,y+70)
       if(index === player.index){
          fill("yellow");
          ellipse(x,y,70,70);
         
          camera.position.x = displayWidth/2
          camera.position.y = cars[index-1].y
        }
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null && player.distance<3050){
      player.distance +=50
      player.update();
    }
    if(player.distance===3000){
      gameState = 2;
      player.rank = player.rank+1;
      Player.updateRank(player.rank)
      //form.gameOver.position(20,80)
     // form.gameOver.html("")

      var go = createImg("images/go.jpg")
     go.position(400,100) 
     go.size(500,400)

       
       form.r.position(20,20);
       form.r.html("Rank:"+player.rank)
    }
    drawSprites();
  }
  end(){
   console.log(player.rank)
   //image(this.image, 300, 100, 200, 200);
  }
}


