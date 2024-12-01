class Node {
    constructor(valor) {
        this.valor = valor;
        this.proximo = null;
    }
}

class ListaLigada {
    constructor() {
        this.head = null;
    }

    inserirOrdenado(valor) {
        const novoNo = new Node(valor);

        if (!this.head || this.head.valor > valor) {
            novoNo.proximo = this.head;
            this.head = novoNo;
        } else {
            let atual = this.head;
            while (atual.proximo && atual.proximo.valor < valor) {
                atual = atual.proximo;
            }
            novoNo.proximo = atual.proximo;
            atual.proximo = novoNo;
        }
    }

    inserir(valor) {
        const novoNo = new Node(valor);
        if (!this.head) {
            this.head = novoNo;
        } else {
            let atual = this.head;
            while (atual.proximo) {
                atual = atual.proximo;
            }
            atual.proximo = novoNo;
        }
    }

    remover() {
        if (!this.head) return null;
        const valor = this.head.valor;
        this.head = this.head.proximo;
        return valor;
    }

    imprimir() {
        let atual = this.head;
        const valores = [];
        while (atual) {
            valores.push(atual.valor);
            atual = atual.proximo;
        }
        return valores.join(" -> ");
    }
}

const listaCheia = new ListaLigada();
["João", "Ana", "Carlos", "Beatriz", "Zeca"].forEach((nome) => listaCheia.inserir(nome));

const listaOrdenada = new ListaLigada();

while (listaCheia.head) {
    const nome = listaCheia.remover();
    listaOrdenada.inserirOrdenado(nome);
}

console.log("Lista ordenada: " + listaOrdenada.imprimir());
