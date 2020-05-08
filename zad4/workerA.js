
self.addEventListener('message', (ev)=>{
    if(ev.data[0] == "obsluz") obsluz(ev.data[1]);
})

function obsluz(kolejka){
    var intr = setInterval(function(){
        if(kolejka[0].czas > 0) kolejka[0].czas--;
        else kolejka.shift();
        self.postMessage(kolejka);
        if(kolejka.length == 0) clearInterval(intr);
    }, 1000)
}
