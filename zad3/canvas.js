var ksztalt = "kwadrat";
var wypelnienie = "wypelnione";

var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');

var mouse = {
    x: undefined,
    y: undefined
}

window.addEventListener('click', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    if(mouse.x < 50 || mouse.x > 170){
        draw(mouse.x, mouse.y);
    }
    else if (mouse.y < 100 || mouse.y > 500){
        draw(mouse.x, mouse.y);
    }
}, false);

function wybierzKsztalt(id){
    ksztalt = id;
};

function wybierzWypelnienie(id){
    wypelnienie = id;
};

function draw(x, y){
    if(ksztalt == "kwadrat" && wypelnienie == "wypelnione"){
        ctx.fillStyle = document.getElementById("kolor").value;
        ctx.fillRect(x, y, 100, 100);
    } 
    if(ksztalt == "kwadrat" && wypelnienie == "niewypelnione"){
        ctx.strokeStyle = document.getElementById("kolor").value;
        ctx.beginPath();
        ctx.rect(x, y, 100, 100);
        ctx.stroke();    
    }
    if(ksztalt == "prostokat" && wypelnienie == "wypelnione"){
        ctx.fillStyle = document.getElementById("kolor").value;
        ctx.fillRect(x, y, 200, 100);
    } 
    if(ksztalt == "prostokat" && wypelnienie == "niewypelnione"){
        ctx.strokeStyle = document.getElementById("kolor").value;
        ctx.beginPath();
        ctx.rect(x, y, 200, 100);
        ctx.stroke();    
    }
    if(ksztalt == "kolo" && wypelnienie == "wypelnione"){
        ctx.fillStyle = document.getElementById("kolor").value;
        ctx.beginPath();
        ctx.arc(x, y, 50, 0, 2 * Math.PI);
        ctx.fill();
    } 
    if(ksztalt == "kolo" && wypelnienie == "niewypelnione"){
        ctx.strokeStyle = document.getElementById("kolor").value;
        ctx.beginPath();
        ctx.arc(x, y, 50, 0, 2 * Math.PI);
        ctx.stroke();   
    }

}




