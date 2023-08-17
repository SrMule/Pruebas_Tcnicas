/*
A partir de un arreglo con números enteros en cualquier orden
Crear una función que reciba el arreglo y determine el mínimo número faltante en una sucesión creciente de números enteros
El número agregado no puede ser más pequeño que el número más pequeño del arreglo original
El arreglo original tendrá al menos un número.
*/

function minNumFaltante(arr) {
    if (arr.length == 1) {
        return arr[0] + 1;
    } else {
        let min = Math.min(...arr);
        let max = Math.max(...arr);
        for (let i = (min + 1); i < max; i++) {
            if (!arr.includes(i)) {
                return i;
            };
        };
        return max + 1;
    };
};

console.log(minNumFaltante([4,1,2,5,6]));// 3
console.log(minNumFaltante([4,1,2,5,6]));// 3
console.log(minNumFaltante([1,2]));// 3
console.log(minNumFaltante([1,2,3,4,5,6]));// 7
console.log(minNumFaltante([5]));// 6
console.log(minNumFaltante([5,7,9,2,5,4,3,1,2,89]));// 6