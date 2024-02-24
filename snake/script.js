
window.onload = function(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    snake = [];
    positionX = 10;
    posiitonY = 10;
    foodX = 15;
    foodY = 15;
    velX = 0;
    velY = 0;
    grid = 20;
    tam = 3;

    setInterval(jogo, 100)

    // controles
    document.addEventListener("keydown",function(e){
        switch(e.keyCode){
            // seta direita = 39
            case 39:
                velX = 1;
                velY = 0;
                break;
            // seta esquerda = 37
            case 37:
                velX = -1;
                velY = 0;
                break;
            case 38:
                velY = -1;
                velX = 0;
                break;
            case 40:
                velY = 1;
                velX = 0;
                break;
        }
    });
}

function jogo(){
    ctx.fillStyle = "#2980B9";
    // dist borda h, fist borda v, largura, altura
    ctx.fillRect(0,0,canvas.width, canvas.height)

    // desl. cobra
    posiitonX += velX;
    positionY += velY;

    // esp
        if(posiitonX < 0){
            posiitonX = grid;
        }
        if(positionX > grid){
            posiitonX = 0;
        }
        if(positionY < 0){
            posiitonY = 20;
        }
        if(positionY > grid){
            posiitonY = 0;
        }

    // config cobra
        ctx.fillStyle = "#fc1723";
        for(let i = 0; i<snake.lenght; i++){
            ctx.fillRect(snake[i].x*grid, snake[i].y*grid, grid-1, grid-1);
            if(snake[i].x == posiitonX && snake[i].y == posiitonY){
                tam = 3;
            }
        }
    // pos cobra
    snake.push({x : posiitonX, y : positionY});
    
    // apagando
    while(snake.lenght > tam){
        snake.shift();
    }

    // config comida
    ctx.fillStyle = "#F1C40F";
    ctx.fillRect(foodX*grid, foodY*grid, grid-1, grid-1);

    if(positionX == foodX && posiitonY == foodY){
        tam++;
        foodX = Math.floor(Math.random()*grid);
        foodY = Math.floor(Math.random()*grid);
    }
}