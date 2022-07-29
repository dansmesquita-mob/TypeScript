type input = number | string ;

function somarValores(input1: input, input2: input){
    if(typeof input1 === "string" || typeof input2 ==="string"){
        return input1.toString() + input2.toString();
    } else {
        return input1 + input2;
    }
}


console.log(somarValores(1,5));
console.log(somarValores("Olá ,","tudo bem?"));
console.log(somarValores("1",5));

// definindo o tipo de retorno de uma função

function somaValoresNumericos(n1: number, n2: number) /* retorno -> */: number{
    return n1 + n2;
}


function printValoresNumericos(n1 :number, n2 :number) :void{
    console.log(n1 + n2);
}


function somarValoresNumericos(numero1:number, numero2:number, callback: (numero: number) => number): number {
    let resultado =  numero1 + numero2;
    return callback(resultado);
}


function aoQuadrado(numero:number):number{
    return numero * numero;
}

function dividirporEleMesmo(numero: number):number{
    return numero / numero;
}

console.log(somarValoresNumericos(1, 3, aoQuadrado));
console.log(somarValoresNumericos(1, 3, dividirporEleMesmo));