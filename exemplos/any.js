"use strict";
// tipo que recebe qualquer tipo
let valorAny;
valorAny = 3;
valorAny = "Olá";
valorAny = true;
let valorString = "teste";
valorString = valorAny;
let valorString2 = "textao";
valorString2 = valorAny;
function somarStrings(string1, string2) {
    console.log(string1 + string2);
}
somarStrings(valorString, valorString2);
somarStrings("Olá, ", "como vai?");
