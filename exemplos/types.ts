let anyEstadeVolta :any;


anyEstadeVolta = 3;
anyEstadeVolta = "teste";
anyEstadeVolta = 5;

let stringTeste : string = "verificar";

stringTeste = anyEstadeVolta;

let unknownValor:unknown;

unknownValor = 3;

unknownValor = 'valor';
unknownValor = true;
unknownValor = "vai sim";

let stringTeste2: string = "agoravai";

// stringTeste2 = unknownValor;


// não permite atribuir uma variavel unknown sem antes checar o tipo, diferente do any
if(typeof unknownValor === "string" ){
    stringTeste2 = unknownValor;
}

// tipo de código que nunca foi finalizado - type: never
function jogaerro(erro: string, codigo: number) :never{
    throw {error: erro, code: codigo}

}

jogaerro("deu erro", 500);