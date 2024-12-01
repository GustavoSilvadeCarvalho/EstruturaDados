class Fila {
    constructor() {
        this.itens = [];
    }

    enfileirar(elemento) {
        this.itens.push(elemento);
    }

    desenfileirar() {
        if (this.estaVazia()) {
            return "A fila está vazia.";
        }
        return this.itens.shift();
    }

    frente() {
        if (this.estaVazia()) {
            return "A fila está vazia.";
        }
        return this.itens[0];
    }

    estaVazia() {
        return this.itens.length === 0;
    }

    // 6. Obter o tamanho da fila
    tamanho() {
        return this.itens.length;
    }

    limpar() {
        this.itens = [];
    }

    toString() {
        return this.itens.join(", "); 
    }
}

const fila = new Fila();

fila.enfileirar("A");
fila.enfileirar("B");
fila.enfileirar("C");
console.log("Fila atual: " + fila.toString());

console.log("Elemento na frente: " + fila.frente());

console.log("Removido: " + fila.desenfileirar());
console.log("Fila após remoção: " + fila.toString());

console.log("Fila está vazia? " + fila.estaVazia());
console.log("Tamanho da fila: " + fila.tamanho());

fila.limpar();
console.log("Fila após limpar: " + fila.toString());
console.log("Fila está vazia? " + fila.estaVazia());