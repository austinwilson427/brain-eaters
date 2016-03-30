var canvas;
var canvasContext;
var statCanvas;
var statCanvasContext;
var playWidth;
var playerWins = 0;
var playerLoss = 0;
var SPEEDX = 10;
var SPEEDY = 20;
var ACCEL = 1.5;
var boundary = 50;
var playerSpeedX = SPEEDX;
var playerSpeedY = SPEEDY;
var blockBelow = false;
var blockAbove = false;
var blockLeft = false;
var blockRight = false;
var eatingSound = new Audio('eating.mp3');
var allFoodFound = new Audio('all_food_found.mp3');
var KEY_LEFT_ARROW = 37;
var KEY_UP_ARROW = 38;
var KEY_RIGHT_ARROW = 39;
var KEY_DOWN_ARROW = 40;
var MAZE_COLS = 24;
var MAZE_ROWS = 16;
var COL_WIDTH = 50;
var COL_HEIGHT = 50;
var MAZE_DIFFICULTY = .82; //A number between 0 and 1. 0 being easiest. Default to 0.82
var row1 = [];
var row3 = [];
var row5 = [];
var row7 = [];
var row9 = [];
var row11 = [];
var row13 = [];
var row15 = [];
var blockIndexArray = [];
var mouseX;
var mouseY; // Take Out Later
var xPos;
var yPos;
var colPlayer;
var rowPlayer;
var playerIndex;
var zombiePic = document.createElement("img");
var zombiePicLoaded = false;
var playerPic = document.createElement("img");
var playerPicLoaded = false;
var foodPic = document.createElement("img");
var foodPicLoaded = false;
//Row 2 - Zombie 1
var zombie1aStatus = fullZombieCreation(true, 2)[0];
var zombie1aX = fullZombieCreation(true, 2)[1];
var zombie1aY = fullZombieCreation(true, 2)[2];
var zombie1aSpeed = fullZombieCreation(true, 2)[3];
var zombie1aIndex;
//Row 2 - Zombie 2
var zombie1bStatus = fullZombieCreation(true, 2)[0];
var zombie1bX = fullZombieCreation(true, 2)[1];
var zombie1bY = fullZombieCreation(true, 2)[2];
var zombie1bSpeed = fullZombieCreation(true, 2)[3];
var zombie1bIndex;
//Row 4 - Zombie 1
var zombie2aStatus = fullZombieCreation(true, 4)[0];
var zombie2aX = fullZombieCreation(true, 4)[1];
var zombie2aY = fullZombieCreation(true, 4)[2];
var zombie2aSpeed = fullZombieCreation(true, 4)[3];
var zombie2aIndex;
//Row 4 - Zombie 2
var zombie2bStatus = fullZombieCreation(true, 4)[0];
var zombie2bX = fullZombieCreation(true, 4)[1];
var zombie2bY = fullZombieCreation(true, 4)[2];
var zombie2bSpeed = fullZombieCreation(true, 4)[3];
var zombie2bIndex;
//Row 6 - Zombie 1
var zombie3aStatus = fullZombieCreation(true, 6)[0];
var zombie3aX = fullZombieCreation(true, 6)[1];
var zombie3aY = fullZombieCreation(true, 6)[2];
var zombie3aSpeed = fullZombieCreation(true, 6)[3];
var zombie3aIndex;
//Row 6 - Zombie 2
var zombie3bStatus = fullZombieCreation(true, 6)[0];
var zombie3bX = fullZombieCreation(true, 6)[1];
var zombie3bY = fullZombieCreation(true, 6)[2];
var zombie3bSpeed = fullZombieCreation(true, 6)[3];
var zombie3bIndex;
//Row 8 - Zombie 1
var zombie4aStatus = fullZombieCreation(true, 8)[0];
var zombie4aX = fullZombieCreation(true, 8)[1];
var zombie4aY = fullZombieCreation(true, 8)[2];
var zombie4aSpeed = fullZombieCreation(true, 8)[3];
var zombie4aIndex;
//Row 8 - Zombie 2
var zombie4bStatus = fullZombieCreation(true, 8)[0];
var zombie4bX = fullZombieCreation(true, 8)[1];
var zombie4bY = fullZombieCreation(true, 8)[2];
var zombie4bSpeed = fullZombieCreation(true, 8)[3];
var zombie4bIndex;
//Row 10 - Zombie 1
var zombie5aStatus = fullZombieCreation(true, 10)[0];
var zombie5aX = fullZombieCreation(true, 10)[1];
var zombie5aY = fullZombieCreation(true, 10)[2];
var zombie5aSpeed = fullZombieCreation(true, 10)[3];
var zombie5aIndex;
//Row 10 - Zombie 2
var zombie5bStatus = fullZombieCreation(true, 10)[0];
var zombie5bX = fullZombieCreation(true, 10)[1];
var zombie5bY = fullZombieCreation(true, 10)[2];
var zombie5bSpeed = fullZombieCreation(true, 10)[3];
var zombie5bIndex;
//Row 12 - Zombie 1
var zombie6aStatus = fullZombieCreation(true, 12)[0];
var zombie6aX = fullZombieCreation(true, 12)[1];
var zombie6aY = fullZombieCreation(true, 12)[2];
var zombie6aSpeed = fullZombieCreation(true, 12)[3];
var zombie6aIndex;
//Row 12 - Zombie 2
var zombie6bStatus = fullZombieCreation(true, 12)[0];
var zombie6bX = fullZombieCreation(true, 12)[1];
var zombie6bY = fullZombieCreation(true, 12)[2];
var zombie6bSpeed = fullZombieCreation(true, 12)[3];
var zombie6bIndex;
//Row 4 - Zombie 1
var zombie7aStatus = fullZombieCreation(true, 14)[0];
var zombie7aX = fullZombieCreation(true, 14)[1];
var zombie7aY = fullZombieCreation(true, 14)[2];
var zombie7aSpeed = fullZombieCreation(true, 14)[3];
var zombie7aIndex;
//Row 4 - Zombie 2
var zombie7bStatus = fullZombieCreation(true, 14)[0];
var zombie7bX = fullZombieCreation(true, 14)[1];
var zombie7bY = fullZombieCreation(true, 14)[2];
var zombie7bSpeed = fullZombieCreation(true, 14)[3];
var zombie7bIndex;
var playerPosX = COL_WIDTH / 2;
var playerPosY = COL_HEIGHT / 2;
var playerWidth = 0;
var playerHeight = 0;
generateRandomBinaryRow(row1);
generateRandomBinaryRow(row3);
generateRandomBinaryRow(row5);
generateRandomBinaryRow(row7);
generateRandomBinaryRow(row9);
generateRandomBinaryRow(row11);
generateRandomBinaryRow(row13);
generateRandomBinaryRow(row15);
var food1Index = findRandomNumberInMaze();
var food2Index = findRandomNumberInMaze();
var food3Index = findRandomNumberInMaze();
var food4Index = findRandomNumberInMaze();
var food5Index = findRandomNumberInMaze();
var food6Index = findRandomNumberInMaze();
var food7Index = findRandomNumberInMaze();
var food8Index = findRandomNumberInMaze();
var food9Index = findRandomNumberInMaze();
var food10Index = findRandomNumberInMaze();
var food1Found = false;
var food2Found = false;
var food3Found = false;
var food4Found = false;
var food5Found = false;
var food6Found = false;
var food7Found = false;
var food8Found = false;
var food9Found = false;
var food10Found = false;
var foodCount = 0;
var foodsCleared = false;
var food1Bool = countfoods(food1Index);
countfoodsCont(food1Bool);
var food2Bool = countfoods(food2Index);
countfoodsCont(food2Bool);
var food3Bool = countfoods(food3Index);
countfoodsCont(food3Bool);
var food4Bool = countfoods(food4Index);
countfoodsCont(food4Bool);
var food5Bool = countfoods(food5Index);
countfoodsCont(food5Bool);
var food6Bool = countfoods(food6Index);
countfoodsCont(food6Bool);
var food7Bool = countfoods(food7Index);
countfoodsCont(food7Bool);
var food8Bool = countfoods(food8Index);
countfoodsCont(food8Bool);
var food9Bool = countfoods(food9Index);
countfoodsCont(food9Bool);
var food10Bool = countfoods(food10Index);
countfoodsCont(food10Bool);
var foodBoolStore = {
    food1: 0,
    food2: 0,
    food3: 0,
    food4: 0,
    food5: 0,
    food6: 0,
    food7: 0,
    food8: 0,
    food9: 0,
    food10: 0
};
function fullZombieCreation(status, row) {
    var returnArray = [];
    var zombieX = zombiePlacementAndSpeed(row, status)[0];
    var zombieY = zombiePlacementAndSpeed(row, status)[1];
    var zombieSpeed = zombiePlacementAndSpeed(row, status)[2];
    returnArray = [status, zombieX, zombieY, zombieSpeed];
    //Returning status, 
    return returnArray;
}
function zombiePlacementAndSpeed(row, zombieStatus) {
    var returnArray = [];
    var zombieX;
    var zombieY;
    var zombieSpeed;
    var mathRandom0toCols = Math.floor(Math.random() * MAZE_COLS);
    var mathRandomSpeed8to12 = Math.floor(Math.random() * 5) + 8;
    if (Math.random() > 0.5) {
        mathRandomSpeed8to12 *= -1;
    }
    if (zombieStatus) {
        zombieX = COL_WIDTH / 2 + COL_WIDTH * mathRandom0toCols;
        zombieY = COL_HEIGHT * row + COL_HEIGHT / 2;
        zombieSpeed = mathRandomSpeed8to12;
    }
    else {
        zombieX = 10000;
        zombieY = 10000;
        zombieSpeed = 0;
    }
    returnArray = [zombieX, zombieY, zombieSpeed];
    return returnArray;
}
window.onload = function () {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    statCanvas = document.getElementById('statCanvas');
    statCanvasContext = statCanvas.getContext('2d');
    playWidth = canvas.width - statCanvas.width;
    var framesPerSecond = 30;
    setInterval(updateScreen, 1000 / framesPerSecond);
    document.addEventListener('keydown', keyPressed);
    document.addEventListener('keydown', setBlockBoundaries);
    document.addEventListener('keydown', setOuterBoundaries);
    document.addEventListener('keyup', keyReleased);
    canvas.addEventListener('mousemove', updateMousePos);
    zombiePic.onload = function () {
        zombiePicLoaded = true;
    };
    zombiePic.src = "zombie.png";
    playerPic.onload = function () {
        playerPicLoaded = true;
    };
    playerPic.src = "player.png";
    foodPic.onload = function () {
        foodPicLoaded = true;
    };
    foodPic.src = "food.png";
};
function updateScreen() {
    drawEverything();
    zombieControl();
    trackPlayer();
    winGameAlert();
}
function drawEverything() {
    //Drawing Canvas
    drawRect(0, 0, canvas.width, canvas.height, 'black');
    drawRect(playWidth, 0, statCanvas.width, statCanvas.height, 'yellow');
    drawMaze();
    drawPlayer();
    findColRow();
    foodPlayerCollision();
    colorText(xPos + "," + yPos, mouseX, mouseY, "yellow", "20px Arial");
    colorText("Wins: " + playerWins, playWidth + 10, 50, "black", "20px Arial");
    colorText("Losses: " + playerLoss, playWidth + 10, 100, "black", "20px Arial");
    colorText("Food Needed: " + foodCount, playWidth + 10, 200, "black", "20px Arial");
}
function zombieControl() {
    zombieDraw(zombie1aStatus, zombie1aX, zombie1aY);
    zombieDraw(zombie1bStatus, zombie1bX, zombie1bY);
    zombieDraw(zombie2aStatus, zombie2aX, zombie2aY);
    zombieDraw(zombie2bStatus, zombie2bX, zombie2bY);
    zombieDraw(zombie3aStatus, zombie3aX, zombie3aY);
    zombieDraw(zombie3bStatus, zombie3bX, zombie3bY);
    zombieDraw(zombie1aStatus, zombie4aX, zombie4aY);
    zombieDraw(zombie1bStatus, zombie4bX, zombie4bY);
    zombieDraw(zombie2aStatus, zombie5aX, zombie5aY);
    zombieDraw(zombie2bStatus, zombie5bX, zombie5bY);
    zombieDraw(zombie3aStatus, zombie6aX, zombie6aY);
    zombieDraw(zombie3bStatus, zombie6bX, zombie6bY);
    zombieDraw(zombie3aStatus, zombie7aX, zombie7aY);
    zombieDraw(zombie3bStatus, zombie7bX, zombie7bY);
    zombieMove();
    zombiePlayerCollision();
}
function zombieDraw(zombieStatus, zombieX, zombieY) {
    if (zombiePicLoaded && zombieStatus) {
        drawBitmapImage(zombiePic, zombieX, zombieY);
    }
}
function zombieMove() {
    zombie1aX = zombieMotion(zombie1aStatus, zombie1aX, zombie1aSpeed)[0];
    zombie1aSpeed = zombieMotion(zombie1aStatus, zombie1aX, zombie1aSpeed)[1];
    zombie1bX = zombieMotion(zombie1bStatus, zombie1bX, zombie1bSpeed)[0];
    zombie1bSpeed = zombieMotion(zombie1bStatus, zombie1bX, zombie1bSpeed)[1];
    zombie2aX = zombieMotion(zombie2aStatus, zombie2aX, zombie2aSpeed)[0];
    zombie2aSpeed = zombieMotion(zombie2aStatus, zombie2aX, zombie2aSpeed)[1];
    zombie2bX = zombieMotion(zombie2bStatus, zombie2bX, zombie2bSpeed)[0];
    zombie2bSpeed = zombieMotion(zombie2bStatus, zombie2bX, zombie2bSpeed)[1];
    zombie3aX = zombieMotion(zombie3aStatus, zombie3aX, zombie3aSpeed)[0];
    zombie3aSpeed = zombieMotion(zombie3aStatus, zombie3aX, zombie3aSpeed)[1];
    zombie3bX = zombieMotion(zombie3bStatus, zombie3bX, zombie3bSpeed)[0];
    zombie3bSpeed = zombieMotion(zombie3bStatus, zombie3bX, zombie3bSpeed)[1];
    zombie4aX = zombieMotion(zombie4aStatus, zombie4aX, zombie4aSpeed)[0];
    zombie4aSpeed = zombieMotion(zombie4aStatus, zombie4aX, zombie4aSpeed)[1];
    zombie4bX = zombieMotion(zombie4bStatus, zombie4bX, zombie4bSpeed)[0];
    zombie4bSpeed = zombieMotion(zombie4bStatus, zombie4bX, zombie4bSpeed)[1];
    zombie5aX = zombieMotion(zombie5aStatus, zombie5aX, zombie5aSpeed)[0];
    zombie5aSpeed = zombieMotion(zombie5aStatus, zombie5aX, zombie5aSpeed)[1];
    zombie5bX = zombieMotion(zombie5bStatus, zombie5bX, zombie5bSpeed)[0];
    zombie5bSpeed = zombieMotion(zombie5bStatus, zombie5bX, zombie5bSpeed)[1];
    zombie6aX = zombieMotion(zombie6aStatus, zombie6aX, zombie6aSpeed)[0];
    zombie6aSpeed = zombieMotion(zombie6aStatus, zombie6aX, zombie6aSpeed)[1];
    zombie6bX = zombieMotion(zombie6bStatus, zombie6bX, zombie6bSpeed)[0];
    zombie6bSpeed = zombieMotion(zombie6bStatus, zombie6bX, zombie6bSpeed)[1];
    zombie7aX = zombieMotion(zombie7aStatus, zombie7aX, zombie7aSpeed)[0];
    zombie7aSpeed = zombieMotion(zombie7aStatus, zombie7aX, zombie7aSpeed)[1];
    zombie7bX = zombieMotion(zombie7bStatus, zombie7bX, zombie7bSpeed)[0];
    zombie7bSpeed = zombieMotion(zombie7bStatus, zombie7bX, zombie7bSpeed)[1];
}
function zombiePlayerCollision() {
    zombie1aIndex = findIndexZombie(zombie1aX, zombie1aY);
    zombie1bIndex = findIndexZombie(zombie1bX, zombie1bY);
    zombie2aIndex = findIndexZombie(zombie2aX, zombie2aY);
    zombie2bIndex = findIndexZombie(zombie2bX, zombie2bY);
    zombie3aIndex = findIndexZombie(zombie3aX, zombie3aY);
    zombie3bIndex = findIndexZombie(zombie3bX, zombie3bY);
    zombie4aIndex = findIndexZombie(zombie4aX, zombie4aY);
    zombie4bIndex = findIndexZombie(zombie4bX, zombie4bY);
    zombie5aIndex = findIndexZombie(zombie5aX, zombie5aY);
    zombie5bIndex = findIndexZombie(zombie5bX, zombie5bY);
    zombie6aIndex = findIndexZombie(zombie6aX, zombie6aY);
    zombie6bIndex = findIndexZombie(zombie6bX, zombie6bY);
    zombie7aIndex = findIndexZombie(zombie7aX, zombie7aY);
    zombie7bIndex = findIndexZombie(zombie7bX, zombie7bY);
    if (zombie1aIndex == playerIndex || zombie1bIndex == playerIndex ||
        zombie2aIndex == playerIndex || zombie2bIndex == playerIndex ||
        zombie3aIndex == playerIndex || zombie3bIndex == playerIndex ||
        zombie4aIndex == playerIndex || zombie4bIndex == playerIndex ||
        zombie5aIndex == playerIndex || zombie5bIndex == playerIndex ||
        zombie6aIndex == playerIndex || zombie6bIndex == playerIndex ||
        zombie7aIndex == playerIndex || zombie7bIndex == playerIndex) {
        var zombieAttack = new Audio('zombie.mp3');
        zombieAttack.play();
        playerLoss++;
        playerPosX = COL_WIDTH / 2;
        playerPosY = COL_HEIGHT / 2;
    }
}
function zombieMotion(zombieStatus, zombieX, zombieSpeed) {
    if (zombieStatus) {
        zombieX += zombieSpeed;
        if (zombieX > playWidth) {
            zombieSpeed = -zombieSpeed;
        }
        if (zombieX < 0) {
            zombieSpeed = -zombieSpeed;
        }
    }
    var returnArray = [];
    returnArray = [zombieX, zombieSpeed];
    return returnArray;
}
function foodPlayerCollision() {
    if (food1Index == playerIndex && food1Found == false && foodBoolStore.food1 == 1) {
        eatingSound.play();
        food1Found = true;
        foodCount--;
    }
    if (food2Index == playerIndex && food2Found == false && foodBoolStore.food2 == 1) {
        eatingSound.play();
        food2Found = true;
        foodCount--;
    }
    if (food3Index == playerIndex && food3Found == false && foodBoolStore.food3 == 1) {
        eatingSound.play();
        food3Found = true;
        foodCount--;
    }
    if (food4Index == playerIndex && food4Found == false && foodBoolStore.food4 == 1) {
        eatingSound.play();
        food4Found = true;
        foodCount--;
    }
    if (food5Index == playerIndex && food5Found == false && foodBoolStore.food5 == 1) {
        eatingSound.play();
        food5Found = true;
        foodCount--;
    }
    if (food6Index == playerIndex && food6Found == false && foodBoolStore.food6 == 1) {
        eatingSound.play();
        food6Found = true;
        foodCount--;
    }
    if (food7Index == playerIndex && food7Found == false && foodBoolStore.food7 == 1) {
        eatingSound.play();
        food7Found = true;
        foodCount--;
    }
    if (food8Index == playerIndex && food8Found == false && foodBoolStore.food8 == 1) {
        eatingSound.play();
        food8Found = true;
        foodCount--;
    }
    if (food9Index == playerIndex && food9Found == false && foodBoolStore.food9 == 1) {
        eatingSound.play();
        food9Found = true;
        foodCount--;
    }
    if (food10Index == playerIndex && food10Found == false && foodBoolStore.food10 == 1) {
        eatingSound.play();
        food10Found = true;
        foodCount--;
    }
    if (foodCount <= 0 && foodsCleared == false) {
        allFoodFound.play();
        foodsCleared = true;
    }
}
function trackPlayer() {
    findColRowPlayer();
    findPlayerIndexNumber(colPlayer, rowPlayer);
    colorText("Player Index: " + playerIndex, playWidth + 10, statCanvas.height + 50, "White", "20px Arial");
}
function drawMaze() {
    for (var i = 0; i < MAZE_COLS; i++) {
        for (var j = 0; j < MAZE_ROWS; j++) {
            var index = MAZE_COLS * j + i;
            if (j % 2 == 0) {
                drawRect(0 + COL_WIDTH * i, 0 + COL_HEIGHT * j, COL_WIDTH, COL_HEIGHT, 'blue');
                blockIndexArray[j * MAZE_COLS + i] = 1;
                if (index == food1Index && food1Found == false) {
                    drawFood(food1Found, i * COL_WIDTH + COL_WIDTH / 2, j * COL_HEIGHT + COL_HEIGHT / 2);
                    blockIndexArray[j * MAZE_COLS + i] = 2;
                    foodBoolStore.food1 = 1;
                }
                if (index == food2Index && food2Found == false) {
                    drawFood(food2Found, i * COL_WIDTH + COL_WIDTH / 2, j * COL_HEIGHT + COL_HEIGHT / 2);
                    blockIndexArray[j * MAZE_COLS + i] = 2;
                    foodBoolStore.food2 = 1;
                }
                if (index == food3Index && food3Found == false) {
                    drawFood(food3Found, i * COL_WIDTH + COL_WIDTH / 2, j * COL_HEIGHT + COL_HEIGHT / 2);
                    blockIndexArray[j * MAZE_COLS + i] = 2;
                    foodBoolStore.food3 = 1;
                }
                if (index == food4Index && food4Found == false) {
                    drawFood(food4Found, i * COL_WIDTH + COL_WIDTH / 2, j * COL_HEIGHT + COL_HEIGHT / 2);
                    blockIndexArray[j * MAZE_COLS + i] = 2;
                    foodBoolStore.food4 = 1;
                }
                if (index == food5Index && food5Found == false) {
                    drawFood(food5Found, i * COL_WIDTH + COL_WIDTH / 2, j * COL_HEIGHT + COL_HEIGHT / 2);
                    blockIndexArray[j * MAZE_COLS + i] = 2;
                    foodBoolStore.food5 = 1;
                }
                if (index == food6Index && food6Found == false) {
                    drawFood(food6Found, i * COL_WIDTH + COL_WIDTH / 2, j * COL_HEIGHT + COL_HEIGHT / 2);
                    blockIndexArray[j * MAZE_COLS + i] = 2;
                    foodBoolStore.food6 = 1;
                }
                if (index == food7Index && food7Found == false) {
                    drawFood(food7Found, i * COL_WIDTH + COL_WIDTH / 2, j * COL_HEIGHT + COL_HEIGHT / 2);
                    blockIndexArray[j * MAZE_COLS + i] = 2;
                    foodBoolStore.food7 = 1;
                }
                if (index == food8Index && food8Found == false) {
                    drawFood(food8Found, i * COL_WIDTH + COL_WIDTH / 2, j * COL_HEIGHT + COL_HEIGHT / 2);
                    blockIndexArray[j * MAZE_COLS + i] = 2;
                    foodBoolStore.food8 = 1;
                }
                if (index == food9Index && food9Found == false) {
                    drawFood(food9Found, i * COL_WIDTH + COL_WIDTH / 2, j * COL_HEIGHT + COL_HEIGHT / 2);
                    blockIndexArray[j * MAZE_COLS + i] = 2;
                    foodBoolStore.food9 = 1;
                }
                if (index == food10Index && food10Found == false) {
                    drawFood(food10Found, i * COL_WIDTH + COL_WIDTH / 2, j * COL_HEIGHT + COL_HEIGHT / 2);
                    blockIndexArray[j * MAZE_COLS + i] = 2;
                    foodBoolStore.food10 = 1;
                }
            }
            drawRow(row1, i, j, 1, 'blue');
            drawRow(row3, i, j, 3, 'blue');
            drawRow(row5, i, j, 5, 'blue');
            drawRow(row7, i, j, 7, 'blue');
            drawRow(row9, i, j, 9, 'blue');
            drawRow(row11, i, j, 11, 'blue');
            drawRow(row13, i, j, 13, 'blue');
            if (foodCount <= 0) {
                drawRow(row15, i, j, 15, 'blue');
            }
            else {
                drawRow(row15, i, j, 15, 'red');
            }
        }
    }
}
function keyPressed(evt) {
    //console.log(evt.keyCode);
    if (evt.keyCode == KEY_LEFT_ARROW) {
        playerPosX -= playerSpeedX;
        playerSpeedX += ACCEL;
    }
    if (evt.keyCode == KEY_RIGHT_ARROW) {
        playerPosX += playerSpeedX;
        playerSpeedX += ACCEL;
    }
    if (evt.keyCode == KEY_UP_ARROW) {
        playerPosY -= playerSpeedY;
        playerSpeedY += ACCEL;
    }
    if (evt.keyCode == KEY_DOWN_ARROW) {
        playerPosY += playerSpeedY;
        playerSpeedY += ACCEL;
    }
}
function keyReleased(evt) {
    //console.log(evt.keyCode);
    if (evt.keyCode == KEY_LEFT_ARROW && playerPosX > 0 && blockLeft == false) {
        playerSpeedX = SPEEDX;
    }
    if (evt.keyCode == KEY_RIGHT_ARROW && playerPosX < playWidth && blockRight == false) {
        playerSpeedX = SPEEDX;
    }
    if (evt.keyCode == KEY_UP_ARROW && blockAbove == false) {
        playerSpeedY = SPEEDY;
    }
    if (evt.keyCode == KEY_DOWN_ARROW && blockBelow == false) {
        playerSpeedY = SPEEDY;
    }
}
function drawPlayer() {
    if (playerPicLoaded) {
        drawBitmapImage(playerPic, playerPosX, playerPosY);
    }
}
function drawFood(foodStatus, foodX, foodY) {
    if (foodPicLoaded && foodStatus == false) {
        drawBitmapImage(foodPic, foodX, foodY);
    }
}
function drawRect(topLeftX, topLeftY, boxWidth, boxHeight, fillColor) {
    canvasContext.fillStyle = fillColor;
    canvasContext.fillRect(topLeftX, topLeftY, boxWidth, boxHeight);
}
function generateRandomBinaryRow(row) {
    var sum = 0;
    for (var i = 0; i < MAZE_COLS; i++) {
        if (Math.random() > MAZE_DIFFICULTY) {
            row[i] = 1;
        }
        else {
            row[i] = 0;
        }
        sum += row[i];
    }
    if (sum == 0) {
        row[Math.floor(Math.random() * 16)] = 1;
    }
}
function findRandomNumberInMaze() {
    var randomNumber = Math.floor(Math.random() * 311 + 48);
    return randomNumber;
}
function countfoods(foodIndex) {
    if (Math.floor(foodIndex / MAZE_COLS) == 2 ||
        Math.floor(foodIndex / MAZE_COLS) == 4 ||
        Math.floor(foodIndex / MAZE_COLS) == 6 ||
        Math.floor(foodIndex / MAZE_COLS) == 8 ||
        Math.floor(foodIndex / MAZE_COLS) == 10 ||
        Math.floor(foodIndex / MAZE_COLS) == 12 ||
        Math.floor(foodIndex / MAZE_COLS) == 14) {
        return true;
    }
    else {
        return false;
    }
}
function countfoodsCont(foodBool) {
    if (foodBool) {
        foodCount++;
    }
}
function drawRow(row, i, j, rowNumb, color) {
    if (row[i] == 1 && j == rowNumb) {
        drawRect(0 + COL_WIDTH * i, 0 + COL_HEIGHT * j, COL_WIDTH, COL_HEIGHT, color);
        blockIndexArray[j * MAZE_COLS + i] = 1;
    }
    if (row[i] == 0 && j == rowNumb) {
        blockIndexArray[j * MAZE_COLS + i] = 0;
    }
}
function setOuterBoundaries(evt) {
    if (playerPosX < 0 + boundary && evt.keyCode == KEY_LEFT_ARROW || playerPosX > playWidth - boundary && evt.keyCode == KEY_RIGHT_ARROW) {
        playerSpeedX = 0;
    }
    if (playerPosX < 0 + boundary && evt.keyCode == KEY_RIGHT_ARROW || playerPosX > playWidth - boundary && evt.keyCode == KEY_LEFT_ARROW) {
        playerSpeedX = 10;
    }
    if (playerPosY < 0 && evt.keyCode == KEY_UP_ARROW) {
        playerSpeedY = 0;
    }
    if (playerPosY < 0 && evt.keyCode == KEY_DOWN_ARROW) {
        playerSpeedY = 10;
    }
}
function setBlockBoundaries(evt) {
    //Checking for no space below
    var playerSpaceBelow = playerIndex + MAZE_COLS;
    var playerSpaceAbove = playerIndex - MAZE_COLS;
    var playerSpaceRight = playerIndex + 1;
    var playerSpaceLeft = playerIndex - 1;
    if (blockIndexArray[playerSpaceBelow] == 0 && evt.keyCode == KEY_DOWN_ARROW) {
        playerSpeedY = 0;
        blockBelow = true;
    }
    else if (blockIndexArray[playerSpaceBelow] != 0 && evt.keyCode == KEY_DOWN_ARROW) {
        blockBelow = false;
    }
    if (blockIndexArray[playerSpaceAbove] == 0 && evt.keyCode == KEY_UP_ARROW) {
        playerSpeedY = 0;
        blockAbove = true;
    }
    else if (blockIndexArray[playerSpaceAbove] != 0 && evt.keyCode == KEY_UP_ARROW) {
        blockAbove = false;
    }
    if (blockIndexArray[playerSpaceRight] == 0 && evt.keyCode == KEY_RIGHT_ARROW) {
        playerSpeedX = 0;
        blockRight = true;
    }
    else if (blockIndexArray[playerSpaceRight] != 0 && evt.keyCode == KEY_RIGHT_ARROW) {
        blockRight = false;
    }
    if (blockIndexArray[playerSpaceLeft] == 0 && evt.keyCode == KEY_LEFT_ARROW) {
        playerSpeedX = 0;
        blockLeft = true;
    }
    else if (blockIndexArray[playerSpaceLeft] != 0 && evt.keyCode == KEY_LEFT_ARROW) {
        blockLeft = false;
    }
}
function updateMousePos(evt) {
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;
    mouseX = evt.clientX - rect.left - root.scrollLeft;
    mouseY = evt.clientY - rect.top - root.scrollTop;
}
function colorText(showWords, textX, textY, fillColor, font) {
    canvasContext.fillStyle = fillColor;
    canvasContext.font = font;
    canvasContext.fillText(showWords, textX, textY);
}
function findColRow() {
    xPos = Math.floor(mouseX / COL_WIDTH);
    yPos = Math.floor(mouseY / COL_HEIGHT);
}
function findColRowPlayer() {
    //Finding col and row by center of player
    colPlayer = Math.floor((playerPosX + playerWidth / 2) / COL_WIDTH);
    rowPlayer = Math.floor((playerPosY + playerHeight / 2) / COL_HEIGHT);
}
function findIndexZombie(zombiePosX, zombiePosY) {
    //Finding col and row for zombie
    var colZombie = Math.floor(zombiePosX / COL_WIDTH);
    var rowZombie = Math.floor(zombiePosY / COL_HEIGHT);
    var resultIndex = findZombieIndexNumber(colZombie, rowZombie);
    return resultIndex;
}
function findPlayerIndexNumber(col, rows) {
    playerIndex = MAZE_COLS * rows + col;
}
function findZombieIndexNumber(col, rows) {
    var zombieIndex = MAZE_COLS * rows + col;
    return zombieIndex;
}
function drawBitmapImage(useBitmap, atX, atY) {
    canvasContext.save();
    canvasContext.translate(atX, atY);
    canvasContext.drawImage(useBitmap, -useBitmap.width / 2, -useBitmap.height / 2);
    canvasContext.restore();
}
function winGameAlert() {
    if (playerPosY > canvas.height && foodCount <= 0) {
        var winSound = new Audio('laser.mp3');
        winSound.play();
        playerWins++;
        playerPosX = COL_WIDTH / 2;
        playerPosY = COL_HEIGHT / 2;
        generateRandomBinaryRow(row1);
        generateRandomBinaryRow(row3);
        generateRandomBinaryRow(row5);
        generateRandomBinaryRow(row7);
        generateRandomBinaryRow(row9);
        generateRandomBinaryRow(row11);
        generateRandomBinaryRow(row13);
        generateRandomBinaryRow(row15);
        zombie1aSpeed = fullZombieCreation(true, 2)[3];
        zombie1bSpeed = fullZombieCreation(true, 2)[3];
        zombie2aSpeed = fullZombieCreation(true, 4)[3];
        zombie2bSpeed = fullZombieCreation(true, 4)[3];
        zombie3aSpeed = fullZombieCreation(true, 6)[3];
        zombie3bSpeed = fullZombieCreation(true, 6)[3];
        zombie4aSpeed = fullZombieCreation(true, 8)[3];
        zombie4bSpeed = fullZombieCreation(true, 8)[3];
        zombie5aSpeed = fullZombieCreation(true, 10)[3];
        zombie5bSpeed = fullZombieCreation(true, 10)[3];
        zombie6aSpeed = fullZombieCreation(true, 12)[3];
        zombie6bSpeed = fullZombieCreation(true, 12)[3];
        zombie7aSpeed = fullZombieCreation(true, 14)[3];
        zombie7bSpeed = fullZombieCreation(true, 14)[3];
        food1Index = findRandomNumberInMaze();
        food2Index = findRandomNumberInMaze();
        food3Index = findRandomNumberInMaze();
        food4Index = findRandomNumberInMaze();
        food5Index = findRandomNumberInMaze();
        food6Index = findRandomNumberInMaze();
        food7Index = findRandomNumberInMaze();
        food8Index = findRandomNumberInMaze();
        food9Index = findRandomNumberInMaze();
        food10Index = findRandomNumberInMaze();
        food1Found = false;
        food2Found = false;
        food3Found = false;
        food4Found = false;
        food5Found = false;
        food6Found = false;
        food7Found = false;
        food8Found = false;
        food9Found = false;
        food10Found = false;
        foodCount = 0;
        food1Bool = countfoods(food1Index);
        countfoodsCont(food1Bool);
        food2Bool = countfoods(food2Index);
        countfoodsCont(food2Bool);
        food3Bool = countfoods(food3Index);
        countfoodsCont(food3Bool);
        food4Bool = countfoods(food4Index);
        countfoodsCont(food4Bool);
        food5Bool = countfoods(food5Index);
        countfoodsCont(food5Bool);
        food6Bool = countfoods(food6Index);
        countfoodsCont(food6Bool);
        food7Bool = countfoods(food7Index);
        countfoodsCont(food7Bool);
        food8Bool = countfoods(food8Index);
        countfoodsCont(food8Bool);
        food9Bool = countfoods(food9Index);
        countfoodsCont(food9Bool);
        food10Bool = countfoods(food10Index);
        countfoodsCont(food10Bool);
        drawMaze();
    }
    else if (playerPosY > canvas.height && foodCount > 0) {
        playerPosY = canvas.height - 10;
    }
}
