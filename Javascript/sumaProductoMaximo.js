/*
Dado un array de números, escribe una función para calcular la suma, el producto y encontrar el valor máximo.
*/

function sumPromMax(arr) {
    let retorno = {
        suma:0, promedio:0, maximo:arr[0]
    };
    for (let i = 0; i < arr.length; i++) {
        retorno.suma += arr[i];
        if (retorno.maximo < arr[i]) {
            retorno.maximo = arr[i];
        };
    };
    retorno.promedio = retorno.suma / arr.length;
    return retorno;
};

let arr = [2,3,5];
const retorno = sumPromMax(arr);
console.log(retorno.suma);
console.log(retorno.promedio);
console.log(retorno.maximo);