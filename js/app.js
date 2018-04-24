// Enemies our player must avoid
var Enemy = function() {
    this.row=[80,160,240];//array of staring row
    this.x=Math.floor(Math.random()*-500);//random starting point
    this.y=this.row[Math.floor(Math.random()*this.row.length)]//get a random row from this.row
    this.sprite = 'images/enemy-bug.png';
};
//constantly update the x,y location
Enemy.prototype.update = function() {
    var speed=Math.floor(Math.random()*10);
    this.x+=speed;
    if (this.x> 500){
      this.x=Math.floor(Math.random()*-500);
    }
};
//render enemy image
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


var Player=function(){
  this.x = 200;
  this.y = 400;
  this.sprite = 'images/char-boy.png';

}
//constantly update x,y location
Player.prototype.update=function(){
  this.x;
  this.y;
  if (this.y==0){
    var that=this;

    setTimeout(function(){
      if(that.y==0){
        window.alert('Congratulation! You win')
      }
      that.x=200;
      that.y=400;
    },500)
  }
  for (var enemy in allEnemies){
    //for each of enemy if its inbetween player x location, and same row, player will lost.
    if (allEnemies[enemy].x<this.x+5 && allEnemies[enemy].x>this.x-60 && allEnemies[enemy].y==this.y){
      window.alert('You Lost');
      this.x=200;
      this.y=400;
    }
    }
  }

//render charector image
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

//handling keypress input
Player.prototype.handleInput=function(key){
  var x_move_range=100;
  var y_move_range=80;
  if (key=='left'){
    if (this.x>0){
    this.x-=x_move_range;
    }
  }else if (key=='right') {
    if (this.x<400){
    this.x+=x_move_range;
  }
  }
else if (key=='up') {
  if (this.y>0){
  this.y-=y_move_range;
  }
  }

else if (key=='down') {
  if (this.y<400){
  this.y+=y_move_range;
  }
  }
}

// use constructor functio to create enemy and player
var player= new Player();
var allEnemies=[];
for (var i=7;i>allEnemies.length;){
  var enemy=new Enemy();
  allEnemies.push(enemy)
}


//add event lisetner for browser/window
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
  }
)
