function torreDeHanoi(discos, origem, destino, auxiliar) {
    if (discos === 1) {
        console.log(`Mova o disco 1 da torre ${origem} para a torre ${destino}`);
        return;
    }
    
    torreDeHanoi(discos - 1, origem, auxiliar, destino);

    console.log(`Mova o disco ${discos} da torre ${origem} para a torre ${destino}`);

    torreDeHanoi(discos - 1, auxiliar, destino, origem);
}

const numeroDeDiscos = 3;
console.log(`Solução para a Torre de Hanoi com ${numeroDeDiscos} discos:`);
torreDeHanoi(numeroDeDiscos, "A", "C", "B");
