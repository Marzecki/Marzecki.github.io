var output = document.getElementById("wynik");

function oblicz(n, p){
    var n = n;
    var p = p;
    var q = 0;
    var r = n;

    var intr = setInterval(function(){
        q = q + 1;
        r = r - p;
        output.innerHTML = "235050 = 5 * " + q + " + " + r;
        if(!(r>=p)) clearInterval(intr);
    }, 100)

    output.innerHTML = "Wynik: " + r;
}
