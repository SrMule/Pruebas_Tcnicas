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