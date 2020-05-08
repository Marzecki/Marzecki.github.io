function oblicz(){
    var A = document.forms['formularz']['A'].value;
    var B = document.forms['formularz']['B'].value;
    var C = document.forms['formularz']['C'].value;

    var x1, x2;

    A = Number(A);
    B = Number(B);
    C = Number(C);

    x1 = -B/2/A+Math.pow(Math.pow(B,2)-4*A*C,0.5)/2/A;
    x2 = -B/2/A-Math.pow(Math.pow(B,2)-4*A*C,0.5)/2/A;

    document.getElementById("wynik").innerHTML = "x1 = " + x1 +"<br>x2 = " + x2;
}