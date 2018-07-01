window.addEventListener("load", function () {
    var button = document.getElementById("addButton");
    button.addEventListener("click", function () {
        var inputPotrawa = document.getElementById("potrawa");
        if (pojemnik.elementy.length == pojemnik.pojemnosc) {
            alert("Nie ma już miejsca!!! GŁODOMORZE!!!");
            return;
        }
        pojemnik.elementy.push(inputPotrawa.value);

        document.getElementById('zawartosc').innerHTML = "";
        for (var i = 0; i < pojemnik.elementy.length; i++) {
            document.getElementById('zawartosc').innerHTML += '<li>' + pojemnik.elementy[i] + '</li>';
        }

    }, false)
}, false)

window.addEventListener("load", function () {
    var button = document.getElementById("eatButton");
    button.addEventListener("click", function () {
        var inputPotrawa = document.getElementById("do_zjedzenia");
        var nazwa = inputPotrawa.value;
        var idx = pojemnik.elementy.indexOf(nazwa);
        if (idx == -1) {
            alert("Nie zjesz wybranej potrawy");
            return;
        }
        pojemnik.elementy.splice(idx,1);

        document.getElementById('zawartosc').innerHTML = "";
        for (var i = 0; i < pojemnik.elementy.length; i++) {
            document.getElementById('zawartosc').innerHTML += '<li>' + pojemnik.elementy[i] + '</li>';
        }
    }, false)
}, false)

var pojemnik = {
    pojemnosc: 3,
    elementy: []
};

console.log(document.getElementById('opis'));

document.getElementById('opis').innerHTML = 'Opis mojego pojemnika <br>' +
        'Liczba potraw: ' + pojemnik.pojemnosc;

