"use strict";
let anyEstadeVolta;
anyEstadeVolta = 3;
anyEstadeVolta = "teste";
anyEstadeVolta = 5;
let stringTeste = "verificar";
stringTeste = anyEstadeVolta;
let unknownValor;
unknownValor = 3;
unknownValor = 'valor';
unknownValor = true;
unknownValor = "vai sim";
let stringTeste2 = "agoravai";
// stringTeste2 = unknownValor;
// não permite atribuir uma variavel unknown sem antes checar o tipo, diferente do any
if (typeof unknownValor === "string") {
    stringTeste2 = unknownValor;
}
// tipo de código que nunca foi finalizado - type: never
function jogaerro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogaerro("deu erro", 500);
