var N;
var A;

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var height = canvas.height;
var width = canvas.width;

function losuj(){
    N = document.forms['formularz']['number'].value;
    A = new Array(N);

    var block_width = width/N;
    var block_height = height/100;

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "gray";

    for(var i = 0; i < N; i++){
        A[i]=(Math.floor(Math.random() * 101));
        console.log(A[i]);
        ctx.fillRect(i*block_width, height-A[i]*block_height, block_width, A[i]*block_height);
    }

    document.getElementById("wyniki").innerHTML = '<br>Wyniki:</br>';
}

function rozwiaz(){
    var worker = new Worker('worker2.js');
    worker.addEventListener('message', workerMessaged);
    worker.postMessage(N);
    worker.postMessage(A);
}

function workerMessaged(ev){
    let data = ev.data;
    document.getElementById("wyniki").innerHTML += ev.data;
}