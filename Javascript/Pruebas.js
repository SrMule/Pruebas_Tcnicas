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