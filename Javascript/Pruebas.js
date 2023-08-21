/*
A pangram is a sentence that contains every single letter of the alphabet at least once.
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
  string = string.toLowerCase();
  var abc = "abcdefghijklmnopqrstuvwxyz"
  for (let i = 0; i < abc.length; i++) {
    if (!string.includes(abc[i])) {
        return false;
    };
  };
  return true;
}

function isPangram(string){
  return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
}


console.log(isPangram("The quick brown fox jumps over the lazy dog."));
console.log(isPangram("This is not a pangram."));
console.log(isPangram("AbCdEfGhIjKlM zYxWvUtSrQpOn"));
*/

/*
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. 
No floats or non-positive integers will be passed.
For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
[10, 343445353, 3453445, 3453545353453] should return 3453455.


function sumTwoSmallestNumbers(numbers) {  
    const num1 = Math.min(...numbers);
    numbers.splice(numbers.indexOf(num1),1);
    const num2 = Math.min(...numbers);
    return num1 + num2;
};

function sumTwoSmallestNumbers(numbers) {  
    numbers.sort((a,b) => a - b);
    return numbers[0] + numbers[1];
};

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
*/

/* 
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.



function XO(str) {
    str = str.toLowerCase();
    arrX = [...str].filter((char) => char == "x");
    arrY = [...str].filter((char) => char == "o");
    if (arrX.length == arrY.length) {
        return true
    }
    return false
};

function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
}

console.log(XO("ooxx"));
console.log(XO("xooxx"));
console.log(XO("ooxXm"));
console.log(XO("zpzpzpp)")); // when no 'x' and 'o' is present should return true
console.log(XO("zzoo"));
*/

/*
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""


function order(words){
    var palabras = words.split(" ");
    var sort = "";
    for (let i = 1; i <= palabras.length; i++) {
        for (let x = 0; x < palabras.length; x++) {
            if (palabras[x].includes(i) && i != 1) {
                sort += ` ${palabras[x]}`;
            } else if (palabras[x].includes(i)){
                sort += palabras[x];
            };
        };
    };
    return sort;
};

function order(words){
  return words.split(' ').sort(function(a, b){
      return a.match(/\d/) - b.match(/\d/);
   }).join(' ');
} 

const order = words => words.split(' ').sort((a, b) => +/(\d+)/.exec(a)[0] - +/(\d+)/.exec(b)[0]).join(' ');


console.log(order("is2 Thi1s T4est 3a"));
console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
console.log(order(" "));
*/

/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.
Create a function that takes a string and returns the string ciphered with Rot13.
If there are numbers or special characters included in the string, they should be returned as they are.
Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message){
    var lowmessage = message.toLowerCase();
    const abc = "abcdefghijklmnopqrstuvwxyz";
    message = message.split("");
    for (let i = 0; i < lowmessage.length; i++) {
        if (/^[A-Za-z]+$/.test(lowmessage[i])) {
            let newchar = abc.indexOf(lowmessage[i]) + 13;
            if (newchar >= abc.length) {
                newchar = newchar - abc.length;
            };
            if (message[i] == lowmessage[i]) {
                message[i] = abc[newchar];
            } else {
                message[i] = abc[newchar].toUpperCase();
            };
        };
    };
    return message.join("");
};

console.log(rot13("Test")); //Grfg


function alphabetPosition(text) {
    text = text.toLowerCase().split("");
    newarr = [];
    const abc = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < text.length; i++) {
        if (/^[A-Za-z]+$/.test(text[i])) {
            newarr.push((abc.indexOf(text[i]) + 1).toString());
        };
    };
    return text = newarr.join(" ");
};

let alphabetPosition = (text) => text.toUpperCase().replace(/[^A-Z]/g, '').split('').map(ch => ch.charCodeAt(0) - 64).join(' ');

console.log(alphabetPosition("aBc d.")); // 1 2 3 4
console.log(alphabetPosition("iom<:{b@")); // 9 15 13 2
console.log(alphabetPosition("22b%6>?j")); // 2 10
console.log(alphabetPosition("70*o#r:}")); // 15 18
*/

/*
Given an array of integers, find the one that appears an odd number of times.
There will always be only one integer that appears an odd number of times.

function findOdd(A) {
    let times;
    for (let i = 0; i < A.length; i++) {
        times = A.filter(number => number == A[i])
        if (times.length % 2 != 0) {
            return A[i];
        };
    };
};

const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

function findOdd(arr) {
  return arr.find((item, index) => arr.filter(el => el == item).length % 2)
}


console.log(findOdd([7]));
console.log(findOdd([0]));
console.log(findOdd([1,1,2]));
console.log(findOdd([0,1,0,1,0]));
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]));
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]));

*/

/*
Tribonacci
you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.
Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array


function tribonacci(signature,n){
    if (n < 3) {
        return signature.splice(0,n);
    } else {
        for (let i = signature.length-1; i < n-1; i++) {
            signature.push(signature[i-2] + signature[i-1] + signature[i]);
        };
        return signature;
    };
};

console.log(tribonacci([1,1,1], 10));
console.log(tribonacci([0,0,1], 10));
console.log(tribonacci([1,1,1],  1));
console.log(tribonacci([300,200,100], 0));

*/

/*
In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.
The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...
Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.
You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.
The string has a length greater or equal to one and contains only letters from ato z.

function printerError(s) {
    let error = s.split("").filter((char => /^[n-z]+$/.test(char)))
    return `${error.length}/${s.length}`;
};

function printerError(s) {
    return `${s.split("").filter((char => /^[n-z]+$/.test(char))).length}/${s.length}`;
};

const printerError = s => `${s.split("").filter((char => /^[n-z]+$/.test(char))).length}/${s.length}`;
const printerError = s => `${s.replace(/[a-m]/gi, "").length}/${s.length}`;

console.log(printerError("aaabbbbhaijjjm")); // 0/14
console.log(printerError("aaaxbbbbyyhwawiwjjjwwm")); // 8/22

*/

/* 
EsPrimo

function EsPrimo(num) {
    if (num == 0) {
        return false;
    } else {
        if (num < 0) {
            num = -num;
        };
        const limite = Math.sqrt(num);
        for (let i = 2; i <= limite; i++) {
            if (num % i == 0) {
                return false;
            };
        };
        return true;
    };
};

console.log(EsPrimo(17));
console.log(EsPrimo(-17));
console.log(EsPrimo(4));
console.log(EsPrimo(0));
// revisar esto
// const arreglo = Array.from({ length: num }, (_, index) => index + 1);
// Revisar bien el uso del set
*/


/* 
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
    HH = hours, padded to 2 digits, range: 00 - 99
    MM = minutes, padded to 2 digits, range: 00 - 59
    SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)


function humanReadable (seconds) {
    let SS = seconds % 60;
    SS = ("0" + SS).slice(-2);
    let MM = Math.floor(seconds / 60) % 60;
    MM = ("0" + MM).slice(-2);
    let HH = Math.floor(Math.floor(seconds / 60) / 60);
    HH = ("0" + HH).slice(-2);
    return `${HH}:${MM}:${SS}`;
};

function humanReadable(seconds) {
    return [(seconds / 3600) | 0, seconds % 3600 / 60, seconds % 3600 % 60].map(n => ('0' + ( '' + n|0)).substr(-2)).join(':')
};

function humanReadable(seconds) {
    const oneMinute = 60
    const oneHour = oneMinute * 60
    const H = ('0' + Math.floor(seconds / oneHour)).slice(-2)
    const M = ('0' + Math.floor(seconds / oneMinute) % 60).slice(-2)
    const S = ('0' + seconds % 60).slice(-2)
    return `${H}:${M}:${S}`
};

console.log(humanReadable(90)); // 00:01:30
console.log(humanReadable(86400)); //24:00:00
console.log(humanReadable(359999)); //99:59:59
*/

/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers.
The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
Write a method that takes the array as an argument and returns this "outlier" N.

[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)


function findOutlier(integers){
    var par = integers.filter(num => num % 2 == 0);
    if (par.length == 1) {
        return par[0];
    }
    return integers.filter(num => num % 2 != 0)[0];
};

// Más eficiente
function findOutlier(integers) {
    let evenCount = 0;
    let oddCount = 0;
    let lastEven = 0;
    let lastOdd = 0;
  
    for (let i = 0; i < integers.length; i++) {
      if (integers[i] % 2 === 0) {
        evenCount++;
        lastEven = integers[i];
      } else {
        oddCount++;
        lastOdd = integers[i];
      }
  
      if (evenCount > 1 && oddCount === 1) {
        return lastOdd;
      } else if (oddCount > 1 && evenCount === 1) {
        return lastEven;
      }
    }
  }
  
  const numbers = [2, 4, 7, 8, 10];
  const outlier = findOutlier(numbers);
  console.log(outlier);  // El resultado será el elemento atípico (7)

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));
*/
