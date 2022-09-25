import { getSnakeBodyPosition, expandSnake } from "./snake.js";
import { createRamdomGrid } from "./grid.js";




let food = getRandomFoodPosition();




const EXPANSION_RATE =5;




export function updateBodyAndFoodPosition(){
    if(getSnakeBodyPosition(food)){
        expandSnake(EXPANSION_RATE);
        food = getRandomFoodPosition();
    }
} 

export function draw(gameBoard){
    let randomFoodOnGrid = document.createElement('div');
    randomFoodOnGrid.style.gridRowStart = food.y
    randomFoodOnGrid.style.gridColumnStart = food.x
    randomFoodOnGrid.classList.add('food');
    gameBoard.appendChild(randomFoodOnGrid);

}





function getRandomFoodPosition(){
    let newFoodPosition;

    while(newFoodPosition ==null || getSnakeBodyPosition(newFoodPosition)){
        newFoodPosition = createRamdomGrid();
    }
    return newFoodPosition
} 






ball.onmousedown = function(event){
    ball.style.position = 'absolute';
    ball.style.zIndex = 1000;

    document.body.append(ball);

   
}

