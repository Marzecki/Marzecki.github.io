function weryfikacja() {
    var imie = document.forms['formularz']['imie'].value;
    const imieReg = /[A-Za-z]/;
    if(!imieReg.test(imie)) {
        document.getElementById("imieRes").innerHTML = "<span style='color:red'>Błąd</span>";
    }else{
        document.getElementById("imieRes").innerHTML = "<span style='color:green'>Ok</span>";
        document.getElementById("imieVal").innerHTML = "<span>"+imie+"</span>";
    };

    var nazwisko = document.forms['formularz']['nazwisko'].value;
    const nazwiskoReg = /[A-Za-z]/;
    if(!nazwiskoReg.test(nazwisko)) {
        document.getElementById("nazwiskoRes").innerHTML = "<span style='color:red'>Błąd</span>";
    }else{
        document.getElementById("nazwiskoRes").innerHTML = "<span style='color:green'>Ok</span>";
        document.getElementById("nazwiskoVal").innerHTML = "<span>"+nazwisko+"</span>";
    };

    //do tego momentu działa potem nawet gdy zmienimy regexa na zwykle litery i sprawdzimy - nie działa
    /*
    var telefon = document.forms['formularz']['telefon'].value;
    const telefonReg = /\+[0-9]{10}/;
    //const telefonReg = /[A-Za-z]/;
    if(!telefonReg.test(telefon)) {
        document.getElementById("telefonRes").innerHTML = "<span style='color:red'>Błąd</span>";
    }else{
        document.getElementById("telefonRes").innerHTML = "<span style='color:green'>Ok</span>";
        document.getElementById("telefonVal").innerHTML = "<span>"+telefon+"</span>";        
    };    
    */

    /*
    var email = document.forms['formularz']['email'].value;
    const emailReg = /^\w+@\w+.\w+$/;
    if(!emailReg.test(email)) {
        document.getElementById("emailRes").innerHTML = "<span style='color:red'>Błąd</sparzynosi skutkun>";
    }else{
        document.getElementById("emailRes").innerHTML = "<span style='color:green'>Ok</span>";
        document.getElementById("emailVal").innerHTML = "<span>"+email+"</span>";           
    };
    */

    //Dalsze sprawdzanie nie ma póki co sensu
}                   