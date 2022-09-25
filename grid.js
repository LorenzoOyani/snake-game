let CELL_GRIDSIZE = 21;

export function createRamdomGrid(){
    return {
        x: Math.floor(Math.random() * CELL_GRIDSIZE) + 1,
        y: Math.floor(Math.random() * CELL_GRIDSIZE) + 1
    }
}

export function outsideGrid(position){
    return position.x < 1 || position.x > CELL_GRIDSIZE ||
            position.y <1 ||position.y > CELL_GRIDSIZE
}

