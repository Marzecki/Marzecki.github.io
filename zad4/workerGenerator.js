var licznik = 0;

const imiona = ["Adam", "Felix", "Ola", "Magda", "Stefan", "Maciek", "Ania", "Julia"];

class Klient {
    constructor(id, czas) {
        this.id = id;
        this.czas = czas;
    }
}

self.addEventListener('message', (ev)=>{
    if(ev.data[0] == "dodaj") dodaj(ev.data[1]);
})

function dodaj(kolejka){
    kolejka.push(new Klient(imiona[Math.floor(Math.random() * 8)], Math.floor(Math.random() * 12) + 6));
    licznik++;
    self.postMessage(kolejka);
}
