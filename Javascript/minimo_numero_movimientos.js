/* 
A partir de un arreglo con números enteros en cualquier orden
Se considera un movimiento como mover un elemento del arreglo a cualquier otra posición dentro del mismo arreglo
Crear una función recursiva que determine la minima cantidad de movimientos necesarios para ordenar el arreglo de manera ascendente
*/

//Implementar mejoras
function min_movFB(arreglo, inicio, subsec, max_len) {
    if (arreglo.length - subsec.length === 0) {
        return 0;
    }
    for (let i = inicio; i < arreglo.length; i++) {
        if (!subsec.length || arreglo[i] >= subsec[subsec.length - 1]) {
            max_len = min_movFB(arreglo, i + 1, subsec.concat([arreglo[i]]), max_len);
        }
    }
    if (arreglo.length - subsec.length < max_len) {
        max_len = arreglo.length - subsec.length;
    }
    return max_len;
}

arreglo = [1,2,7,6];
console.log(min_movFB(arreglo,0,[],arreglo.length));