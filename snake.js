import { getInputDirection } from "./input.js";


export const SNAKE_SPEED =5

let snakeBody = [{ x:11, y:11}];

let newSnakeBody = 0;

export function update(){
    addNewBody();
    let inputDirection = getInputDirection();
    for(let i = snakeBody.length -2; i>=0; i--){
        snakeBody[i + 1] = { ...snakeBody[i] };

    }
    snakeBody.x += inputDirection.x
    snakeBody.y += inputDirection.y
}

export function draw(gameBoard){
    snakeBody.forEach(snake=>{
        let snakeBodyElement = document.createElement('div');
        snakeBodyElement.style.gridRowStart = snake.y
        snakeBodyElement.style.gridColumnStart = snake.x
        snakeBodyElement.classList.add('snake');
        gameBoard.appendChild(snakeBodyElement);
    })

}

export function expandSnake(amount){
    newSnakeBody +=amount;

}


export function getSnakeHead(){
    return snakeBody[0];
}


export function getSnakeBodyPosition(position, { headPosition = false} = {}){
        snakeBody.some((body, index)=>{
            if(headPosition && index == 0) return false;
                    return  bodyPositionOfSnake(body, position);

        })
        
}

export function snakeIntersection(){
    return getSnakeBodyPosition(snakeBody[0], headPosition =true);
}


function addNewBody(){
    for(let i =0; i < newSnakeBody.length; i++){
        snakeBody.push({...snakeBody[snakeBody.length -1]})
    }
    newSnakeBody = 0;
}


function bodyPositionOfSnake(position1, position2){
        position1.x == position2.x && position1.y == position2.y;

}




