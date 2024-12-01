class Pilha {
    constructor() {
        this.itens = [];
    }

    empilhar(elemento) {
        this.itens.push(elemento);
    }

    desempilhar() {
        return this.itens.pop();
    }

    estaVazia() {
        return this.itens.length === 0;
    }
}

function decimalParaBinario(numeroDecimal) {
    const pilha = new Pilha();
    let numero = numeroDecimal;

    while (numero > 0) {
        const resto = Math.floor(numero % 2);
        pilha.empilhar(resto);
        numero = Math.floor(numero / 2);
    }

    let binario = "";
    while (!pilha.estaVazia()) {
        binario += pilha.desempilhar();
    }

    return binario || "0";
}

const numeroDecimal = 25;
console.log(`O número ${numeroDecimal} em binário é: ${decimalParaBinario(numeroDecimal)}`);
