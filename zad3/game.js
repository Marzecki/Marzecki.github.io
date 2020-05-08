var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
//canvas.width = window.innerWidth;
//canvas.height = window.innerHeight;

canvas.width = innerWidth = 700;
canvas.height = innerHeight = 600;


//var rectWidth = window.innerWidth*0.1;
//var rectHeight = window.innerHeight*0.05;

var rectWidth = 50;
var rectHeight = 20;
var shotWidth = 5;
var shotHeight = 40;

var score = 0;

var enemies = new Array(3);
for(var i = 0; i < 3; i++){
    enemies[i] = new Array(4);
    for(var j = 0; j < 4; j++){
        enemies[i][j] = true;
    }
}

var player = {
    x: undefined,
    y: undefined
}

var shot = {
    x: undefined,
    y: undefined
}

var shotWasMade = false;

player.y = innerHeight*0.8;
player.x = innerWidth/2-rectWidth/2;

window.addEventListener('keypress', function(event){
    if(event.code == "KeyA") player.x -= innerWidth*0.008;
    if(event.code == "KeyD") player.x += innerWidth*0.008;
    if(event.code == "KeyP") {
        if(shotWasMade == false){
            shotWasMade = true;
            shot.x = player.x+rectWidth/2-shotWidth/2;
            shot.y = player.y-shotHeight;
        }
        
    }

}, false);




function drawEnemy(x, y){
    ctx.fillRect(x, y, rectWidth, rectHeight);
}

function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    for(var i = 0; i < 4; i++){
        for(var j = 0; j < 3; j++){
            if(enemies[j][i] == true) {
                drawEnemy(i*2*rectWidth+innerWidth*0.25, j*2*rectHeight+innerHeight*0.1);
            }
        }
    }

    if(player.x >= innerWidth-rectWidth) player.x = innerWidth-rectWidth;
    if(player.x <= 0) player.x = 0;
    ctx.fillRect(player.x, player.y, rectWidth, rectHeight);

    if(shotWasMade){
        shot.y -= innerHeight*0.01;
        ctx.fillStyle = "red";
        ctx.fillRect(shot.x, shot.y, shotWidth, shotHeight);
        ctx.fillStyle = "black";

        if(shot.y < 0-shotHeight) shotWasMade = false;
    } 

    for(var i = 0; i < 4; i++){
        for(var j = 0; j < 3; j++){
            if(shot.y <= j*2*rectHeight+innerHeight*0.1 && enemies[j][i] == true){
                if((shot.x >=i*2*rectWidth+innerWidth*0.25)&&(shot.x<=i*2*rectWidth+innerWidth*0.25+rectWidth)){
                    //ctx.clearRect(i*2*rectWidth+innerWidth*0.25, j*2*rectHeight+innerHeight*0.1, rectWidth, rectHeight);
                    enemies[j][i] = false;
                    shotWasMade = false;
                    score++;
                    if(score == 12) document.getElementById('score').innerHTML = "WIN!";
                    else document.getElementById('score').innerHTML = score;
                }
            }

        }
    }

}

animate();