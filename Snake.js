const canvas = document.getElementById("snakeCanvas");
const ctx = canvas.getContext("2d");
const tileSize = 20;
const gridSize = canvas.width / tileSize;

let snake = [{ x: 5, y: 5 }];
let food = { x: 10, y: 10 };
let direction = "right";

function drawSnake() {
    ctx.fillStyle = "green";
    snake.forEach(segment => {
        ctx.fillRect(segment.x * tileSize, segment.y * tileSize, tileSize, tileSize);
    });
}

function drawFood() {
    ctx.fillStyle ="red";
    ctx.fillRect(food.x * tileSize, food.y * tileSize, tileSize, tileSize);

}

function moveSnake() {
    const head = { ...snake[0] };

    switch (direction) {
        case "up":
            head.y--;
            break;
            case "down":
                head.y--;
                
    }
}