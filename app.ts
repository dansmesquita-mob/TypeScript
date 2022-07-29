// realizando desafios propostos
// Desafio 1:
 interface emp  {
    name: string,
    code: number
}

let employee: emp = {
    code: 10,
    name: "John"
};

// Desafio 2:

interface Pessoa {
    nome: string,
    idade: number,
    profissao: Profissao
}

enum Profissao {
    Atriz,
    Padeiro
}

const pessoa1 : Pessoa  = {
    nome : "Maria",
    idade : 29,
    profissao : Profissao.Atriz
}
const pessoa2 : Pessoa  = {
    nome : "Roberto",
    idade : 19,
    profissao : Profissao.Padeiro
}
const pessoa3 : Pessoa  = {
    nome : "Laura",
    idade : 32,
    profissao : Profissao.Atriz
}
const pessoa4 : Pessoa  = {
    nome : "Carlos",
    idade : 19,
    profissao : Profissao.Padeiro
}

// Desafio 3

let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') ;

let saldoTotal = 0;

function somarAoSaldo(valor: number) {
    if(campoSaldo){
        saldoTotal +=valor;
        campoSaldo.innerHTML = saldoTotal.toString();
        limparSoma();
    }
}

const limparSoma = () => soma.value = "";

function limparSaldo() {
    if(campoSaldo){
        saldoTotal = 0;
        campoSaldo.innerHTML = '';
    }
}


botaoAtualizar?.addEventListener('click', function () {
    let valor: number = Number(soma.value);
    if(valor > 0){
        somarAoSaldo(valor);
    }else {
        soma.value = "";
    }
});

botaoLimpar?.addEventListener('click', function () {
    limparSaldo();
});