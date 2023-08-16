/* FizzBuzz
Se deben considerar un arreglo con los números desde el 1 hasta el 100
Si el número es divisible por 3 este se debe reemplazar por "Fizz".
Si el número es divisible por 5 este se debe reemplazar por "Buzz".
Si el número es divisible tanto por 3 como por 5 este se debe reemplazar por "FizzBuzz".
Si el número no es divisible ni por 3 ni por 5 no debe haber cambios en el número.
Reglas: solo se puede usar for, if, var, let, +, arrays, toString(), Number, String, =, ==, !=, push(), length y console.table().
Resultado final esperado: un arreglo mostrado por consola con los números del 1 al 100 donde estén reemplazados los Fizz, Buzz y FizzBuzz según corresponda.

Recomendaciones: 
    1- Crear el arreglo con los números del 1 al 100
    2- Encontrar los números Fizz
    3- Encontrar los números Buzz
    4- Reemplazar los números Fizz, Buzz y FizzBuzz en el arreglo
    5- Imprimir por pantalla el arreglo final.
*/

// :)

var arr1To100 = [];
for (let i = 1; i != 101; i++) {
    arr1To100.push(i);
};

var fizzBuzz;
var numeroActual;
for (let i = 0; i != arr1To100.length; i++) {
    numeroActual = arr1To100[i].toString();
    fizzBuzz = "";
    //Parte Fizz
    let sumDigitos = 0;
    for (let i = 0; 1 != numeroActual.length; i++) {
        if (numeroActual.length == 2) {
            sumDigitos = Number(numeroActual[1]) + Number(numeroActual[0]);
            numeroActual = sumDigitos.toString();
        };
        if (numeroActual.length == 3) {
            sumDigitos = Number(numeroActual[2]) + Number(numeroActual[1]) + Number(numeroActual[0]);
            numeroActual = sumDigitos.toString();
        };
    };
    if (numeroActual == 9) {
        fizzBuzz = "Fizz";
    };
    if (numeroActual == 6) {
        fizzBuzz = "Fizz";
    };
    if (numeroActual == 3) {
        fizzBuzz = "Fizz";
    };
    //Parte Buzz
    numeroActual = arr1To100[i].toString();
    if (numeroActual.length == 1) {
        if (numeroActual == 5) {
            fizzBuzz = fizzBuzz + "Buzz";
        };
    };
    if (numeroActual.length == 2) {
        if (numeroActual[1] == 0) {
            fizzBuzz = fizzBuzz + "Buzz";
        };
        if (numeroActual[1] == 5) {
            fizzBuzz = fizzBuzz + "Buzz";
        };
    };
    if (numeroActual.length == 3) {
        if (numeroActual[2] == 0) {
            fizzBuzz = fizzBuzz + "Buzz";
        };
    };
    if (!fizzBuzz) {
        fizzBuzz = arr1To100[i];
    };
    arr1To100[i] = fizzBuzz;
};
console.table(arr1To100);