import { update as snakeUpdate, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection} from "./snake.js"
import { updateBodyAndFoodPosition, draw as drawFood } from "./food.js";
import { outsideGrid } from "./grid.js";


let gameOver = false

let lastRenderTime = 0;
let gameUI= document.getElementById('game-board')

function moveSnake(currentTime){
    if(gameOver){
        if(confirm('You lost. press ok to start')){
            window.location ='/'
        }
        return;
    }

    window.requestAnimationFrame(moveSnake);
    const SinceLastRender = (currentTime - lastRenderTime) /1000;
    if(SinceLastRender < 1 /SNAKE_SPEED) return;
    lastRenderTime = currentTime
    update()
    draw()
}


window.requestAnimationFrame(moveSnake)




function update(){
    snakeUpdate()
    updateBodyAndFoodPosition()
    checkDeath()
}

function draw(){
    gameUI.innerHTML = ''
    drawSnake(gameUI)
    drawFood(gameUI);
}

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead() || snakeIntersection())
}






