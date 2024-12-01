class Deque {
    constructor() {
        this.itens = [];
    }

    adicionarFrente(elemento) {
        this.itens.unshift(elemento);
    }

    adicionarAtras(elemento) {
        this.itens.push(elemento);
    }

    removerFrente() {
        return this.itens.shift();
    }

    removerAtras() {
        return this.itens.pop();
    }

    estaVazia() {
        return this.itens.length === 0;
    }

    tamanho() {
        return this.itens.length;
    }

    frente() {
        return this.itens[0];
    }
}

function batataQuente(participantes, passos) {
    const fila = new Deque();

    participantes.forEach((p) => fila.adicionarAtras(p));

    while (fila.tamanho() > 1) {
        for (let i = 0; i < passos; i++) {
            fila.adicionarAtras(fila.removerFrente());
        }
        console.log(`Eliminado: ${fila.removerFrente()}`);
    }

    return fila.frente();
}

const participantes = ["Ana", "Beto", "Carla", "Daniel", "Ester"];
const passos = 3;
const vencedor = batataQuente(participantes, passos);
console.log(`Vencedor: ${vencedor}`);
