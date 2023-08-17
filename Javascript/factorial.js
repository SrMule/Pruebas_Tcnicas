/* 
Escribir una funcion que retorne el factorial del numero ingresado como parametro
*/

function factorial(num) {
    if (num == 0) {
        return 1;
    } else {
        let nFactorial = num;
        for (let i = num-1; i >= 2; i--) {
            nFactorial *= i;
        };
        return nFactorial;
    };
};

console.log(factorial(0)); //1
console.log(factorial(1)); //1
console.log(factorial(4)); //24
console.log(factorial(5)); //120