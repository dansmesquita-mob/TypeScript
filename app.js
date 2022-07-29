"use strict";
let employee = {
    code: 10,
    name: "John"
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Atriz"] = 0] = "Atriz";
    Profissao[Profissao["Padeiro"] = 1] = "Padeiro";
})(Profissao || (Profissao = {}));
const pessoa1 = {
    nome: "Maria",
    idade: 29,
    profissao: Profissao.Atriz
};
const pessoa2 = {
    nome: "Roberto",
    idade: 19,
    profissao: Profissao.Padeiro
};
const pessoa3 = {
    nome: "Laura",
    idade: 32,
    profissao: Profissao.Atriz
};
const pessoa4 = {
    nome: "Carlos",
    idade: 19,
    profissao: Profissao.Padeiro
};
// Desafio 3
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
let saldoTotal = 0;
function somarAoSaldo(valor) {
    if (campoSaldo) {
        saldoTotal += valor;
        campoSaldo.innerHTML = saldoTotal.toString();
        limparSoma();
    }
}
const limparSoma = () => soma.value = "";
function limparSaldo() {
    if (campoSaldo) {
        saldoTotal = 0;
        campoSaldo.innerHTML = '';
    }
}
botaoAtualizar === null || botaoAtualizar === void 0 ? void 0 : botaoAtualizar.addEventListener('click', function () {
    let valor = Number(soma.value);
    if (valor > 0) {
        somarAoSaldo(valor);
    }
    else {
        soma.value = "";
    }
});
botaoLimpar === null || botaoLimpar === void 0 ? void 0 : botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
