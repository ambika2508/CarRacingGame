class Form {

  constructor() {
    this.input = createInput(" ");
    this.button = createButton('Play');
    this.greeting = createElement('h1');
    this.reset = createButton('Reset');
    this.r = createElement('h1');
    this.gameOver = createElement('h1');
    
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(innerWidth/2 - 80, 30);
    this.reset.position(innerWidth - 100, 20);

    this.input.position(innerWidth/2 - 80, innerHeight/2 - 100);
    this.button.position(innerWidth/2 - 80, innerHeight/2 - 30);
    this.reset.mousePressed(()=>{
      player.updateCount(0)
      game.update(0)
      Player.updateRank(0)
    })

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(innerWidth/2 - 80, innerHeight/2 - 20);
    });

  }
}
