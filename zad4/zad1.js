var spanKolejka = document.getElementById("kolejka");
var spanA = document.getElementById("urzednikA");
var spanB = document.getElementById("urzednikB");
var spanC = document.getElementById("urzednikC");
var spanLicznik = document.getElementById("licznik");
var spanOdrzuceni = document.getElementById("odrzuceni");

var kolejka = [];
var kolejkaMax = 10;

var urzednikA = []; 
var urzednikB = [];
var urzednikC = [];

var workerGenerator = new Worker('workerGenerator.js');
workerGenerator.addEventListener('message', workerGeneratorMessaged);
var workerA = new Worker('workerA.js');
workerA.addEventListener('message', workerAMessaged);
var workerB = new Worker('workerB.js');
workerB.addEventListener('message', workerBMessaged);
var workerC = new Worker('workerC.js');
workerC.addEventListener('message', workerCMessaged);
var workerKolejka = new Worker('workerKolejka.js');
workerKolejka.addEventListener('message', workerKolejkaMessaged);

var timer = 0;
var licznik = 0;
var odrzuceni = 0;
var check = 1;

class Klient {
    constructor(id, czas) {
        this.id = id;
        this.czas = czas;
    }
}

function start(){

    kolejkaMax = document.forms['formularz']['number'].value;

    var intr = setInterval(function(){

        if(timer % check == 0){
            if(kolejka.length < kolejkaMax) workerGenerator.postMessage(["dodaj", kolejka]);
            else odrzuceni++;
            check = Math.floor(Math.random() * 5) + 1;
        }

        //sprawdz czy wolne miejsce przy okienku
        if(urzednikA.length == 0){
            if(kolejka.length > 0){
                urzednikA.push(kolejka[0]);
                workerA.postMessage(["obsluz", urzednikA]);
                workerKolejka.postMessage(["usun", kolejka]);
                licznik++;
            }
        } 
        else if (urzednikB.length == 0){
            if(kolejka.length > 0){
                urzednikB.push(kolejka[0]);
                workerB.postMessage(["obsluz", urzednikB]);
                workerKolejka.postMessage(["usun", kolejka]);
                licznik++;
            }
        }
        else if (urzednikC.length == 0){
            if(kolejka.length > 0){
                urzednikC.push(kolejka[0]);
                workerC.postMessage(["obsluz", urzednikC]);
                workerKolejka.postMessage(["usun", kolejka]);
                licznik++;
            }
        }

        //wypisz kolejke
        spanKolejka.innerHTML = "";
        for(var i = 0; i < kolejka.length; i++){
            spanKolejka.innerHTML += "[" + kolejka[i].id + "] czas: " + kolejka[i].czas + "<br>";
        }

        //wypisz okienka
        if(urzednikA.length > 0) spanA.innerHTML = "[" + urzednikA[0].id + "] czas: " + urzednikA[0].czas + "<br>";
        else spanA.innerHTML = "";
        if(urzednikB.length > 0) spanB.innerHTML = "[" + urzednikB[0].id + "] czas: " + urzednikB[0].czas + "<br>";
        else spanB.innerHTML = "";
        if(urzednikC.length > 0) spanC.innerHTML = "[" + urzednikC[0].id + "] czas: " + urzednikC[0].czas + "<br>";
        else spanC.innerHTML = "";

        //console.log(licznik);
        spanLicznik.innerHTML = licznik + "     ";
        spanOdrzuceni.innerHTML = odrzuceni;

        timer++;
        
    }, 1000)

}

function workerGeneratorMessaged(ev){
    let data = ev.data;
    kolejka = data;

}

function workerAMessaged(ev){
    let data = ev.data;
    urzednikA = data;
}

function workerBMessaged(ev){
    let data = ev.data;
    urzednikB = data;
}

function workerCMessaged(ev){
    let data = ev.data;
    urzednikC = data;
}

function workerKolejkaMessaged(ev){
    let data = ev.data;
    kolejka = data;
}