
self.addEventListener('message', (ev)=>{
    if(ev.data[0] == "usun") usun(ev.data[1]);
})

function usun(kolejka){
    kolejka.shift();
    self.postMessage(kolejka);
}