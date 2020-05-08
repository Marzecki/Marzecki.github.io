function over(){
    document.getElementById("picture").src = "img/pwr.jpg";
}

function out(){
    document.getElementById("picture").src = "img/gk.gif";
}

function over2(str){
    document.getElementById("picture"+str).src = "img/"+str+"over.gif";
    document.getElementById("picture").src = "img/"+str+".gif";
}

function out2(str){
    document.getElementById("picture"+str).src = "img/"+str+"out.gif";
}

function animacja(){
    var obiekt = document.getElementById("rocket");

    obiekt.style.top="200px";
    obiekt.style.left="260px";
    obiekt.style.position="absolute";

    var pos; 
    var dir = 'right';

    setInterval(function(){
        pos = obiekt.style.left;
        pos = parseInt(pos, 10);
        if(dir=='right') pos += 10;
        else pos -= 10;
        if(pos==670){
            dir='left';
            obiekt.style.transform = "scaleX(-1)";
        }
        if(pos==260){
            dir='right';
            obiekt.style.transform = "scaleX(1)";
        }
        obiekt.style.left = pos+"px";
    }, 100);

}

function animacja2(){
    var obiekt = document.getElementById("rocket");

    obiekt.style.top="200px";
    obiekt.style.left="260px";
    obiekt.style.position="absolute";

    var pos; 
    var dir = 'right';

    setInterval(function(){
        pos = obiekt.style.left;
        pos = parseInt(pos, 10);
        if(dir=='right') pos += 10;
        else pos -= 10;
        if(pos==670){
            dir='left';
            obiekt.style.transform = "scaleX(-1)";
        }
        if(pos==260){
            dir='right';
            obiekt.style.transform = "scaleX(1)";
        }
        obiekt.style.left = pos+"px";
    }, 100);

}

var random_duck = 0;


function animacja3(){

    var obiekt = document.getElementById("duck");

    obiekt.style.top="200px";
    obiekt.style.left="260px";
    obiekt.style.position="absolute";

    var pos_x, pos_y; 
    var random_x, random_y;

    setInterval(function(){
        pos_x = obiekt.style.left;
        pos_x= parseInt(pos_x, 10);

        pos_y = obiekt.style.top;
        pos_y = parseInt(pos_y, 10);

        random_x = Math.floor(Math.random()*600 + 260);
        random_y = Math.floor(Math.random()*200 + 200);

        random_duck = Math.floor(Math.random()*4);
        if(random_duck==3) obiekt.src = "img/duck-bad.png";
        else obiekt.src = "img/duck-good.png";


        obiekt.style.left = random_x+"px";
        obiekt.style.top = random_y+"px";
        
    }, 1000);


}

function check(){
    var score = document.getElementById("score").innerHTML;
    score = parseInt(score, 10);
    if(random_duck==3) score++;
    else score--;
    document.getElementById("score").innerHTML = score;

}