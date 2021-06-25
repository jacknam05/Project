let snake, food, rock, pill;

function setup() {
   createCanvas(WIDTH, HEIGHT);
   newGame();
}

function draw() {
   background(0);
   if(!snake.isDead){
      drawSnake();
   } else {
      newGame()
   }
}

function drawSnake() {
   // update every SNAKE_SPEED frame
   if(frameCount % SNAKE_SPEED == 0)
   {
      snake.update();
   }
  
   //
   // textSize(15);
   // text("Score: " + snake.length, 0, 15);
   food.show();
   snake.show();
   rock.show();
   pill.show();

   // Handle when snake eat food
   if(snake.head.x == food.x && snake.head.y == food.y){
      eatFood();
   }

   if(snake.head.x == rock.x && snake.head.y == rock.y){
      eatRock();
   }

   if(snake.head.x == pill.x && snake.head.y == pill.y){
      eatPill();
   }
}

function newGame() {
   snake = new Snake();
   food = new Food()
   rock = new Rock()
   pill = new Pill()
}

function eatFood() {
   snake.length++;
   document.getElementById('score').innerHTML = snake.length + 1; 
   food.newFood();
   var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
   audio.play();
}

function eatRock () {
   snake.length--;
   document.getElementById('score').innerHTML = snake.length + 1;

   if (snake.length < 0) {
      snake.isDead = true
      var audio = new Audio('https://drive.google.com/file/d/1-rZnPm1loqg6fbm0Hu--eJOo8Fz5YMxW/view');
      audio.play();
   }
   rock.newRock();
}

function eatPill () {
   snake.length ++;
   snake.length ++;
   document.getElementById('score').innerHTML = snake.length + 2;
   pill.newPill();
   var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
   audio.play();
}

function keyPressed() {
   if (keyCode == UP_ARROW && snake.vel.y != 1) {
      snake.vel.y = -1;
      snake.vel.x = 0;
   } else if (keyCode == DOWN_ARROW && snake.vel.y != -1) {
      snake.vel.y = 1;
      snake.vel.x = 0;
   }  else if (keyCode == LEFT_ARROW && snake.vel.x != 1) {
      snake.vel.y = 0;
      snake.vel.x = -1;
   } else if (keyCode == RIGHT_ARROW && snake.vel.x != -1) {
      snake.vel.y = 0;
      snake.vel.x = 1;
   }
}