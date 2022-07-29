"use strict";
function somarValores(input1, input2) {
    if (typeof input1 === "string" || typeof input2 === "string") {
        return input1.toString() + input2.toString();
    }
    else {
        return input1 + input2;
    }
}
console.log(somarValores(1, 5));
console.log(somarValores("Olá ,", "tudo bem?"));
console.log(somarValores("1", 5));
// definindo o tipo de retorno de uma função
function somaValoresNumericos(n1, n2) {
    return n1 + n2;
}
function printValoresNumericos(n1, n2) {
    console.log(n1 + n2);
}
function somarValoresNumericos(numero1, numero2, callback) {
    let resultado = numero1 + numero2;
    return callback(resultado);
}
function aoQuadrado(numero) {
    return numero * numero;
}
function dividirporEleMesmo(numero) {
    return numero / numero;
}
console.log(somarValoresNumericos(1, 3, aoQuadrado));
console.log(somarValoresNumericos(1, 3, dividirporEleMesmo));
