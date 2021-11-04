/// PART 1
// # Write a function that accepts an array of strings and returns a new array containing every other string from the original array. For example, if the input is ["a", "b", "c", "d", "e", "f"], the output should be ["a", "c", "e"].

// var letters = ["a", "b", "c", "d", "e", "f"];
// var everyOther = [];

// for (var i = 1; i < letters.length; i += 2) {
//   everyOther.push(letters[i]);
// }
// console.log(everyOther);

// # Write a method that accepts one argument - an array of numbers. The method should return the greatest number. For example, if the input is [5, 4, 8, 1, 2], the output should be 8.

// var numbers = [5, 4, 8, 1, 2, 10];
// var highest = numbers[0];

// numbers.forEach(function(number) {
//   if (number > highest) {
//     highest = number;
//   }
// });
// console.log(highest);

// # Write a method that accepts a number and returns its factorial. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

// var product = 1;

// function factorial(number) {
//   for (var i = 1; i <= number; i++) {
//     product *= i;
//   }
//   return product;
// }
// console.log(factorial(5));

// # Write a method that accepts one argument - an array of numbers that are in ascending order. The method that returns a new array with the same values in descending order. However, do not use the "reverse" method built into Ruby.

// var nA = [1, 2, 3];
// var nD = [];

// for (var i = (nA.length - 1); i >= 0; i--) {
//   nD.push(nA[i]);
// }
// console.log(nD);

// # Write a method that accepts two arrays of numbers, and returns an array of every sum of every combination of single numbers from the first and second array. For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should return this array: [101, 501, 1001, 105, 505, 1005, 110, 510, 1010].

// var n1 = [1, 5, 10];
// var n2 = [100, 500, 1000];
// var combine = [];

// function combination(n1, n2) {
//   for (var i = 0; i < n1.length; i++) {
//     for (var j = 0; j < n2.length; j++) {
//       combine.push(n1[i] + n2[j]);
//     }
//   } 
//   return combine;
// }
// console.log(combination(n1, n2));

// function combination(n1, n2) {
//   n1.forEach(function(number1) {
//     n2.forEach(function(number2) {
//       combine.push(number1 + number2);
//     });
//   });
//   return combine;
// }
// console.log(combination(n1, n2));

// BONUS - Incomplete
// var array = [1, 2, 3];
// var placeholder = 0;

// function bubbleSort(array) {
//   var swapped = false;
//   while (swapped === true) {
//     for (var i = 0; i < (array.length - 1); i++) {
//       if (array[i] > array[i + 1]) {
//         placeholder = array[i];
//         array[i] = array[i + 1];
//         array[i + 1] = placeholder;
//         swapped = true;
//       } else {
//         swapped = false;
//       }
//     }
//   }
//   return array;
// }
// console.log(bubbleSort(array));

// PART 2

// 1) Write a function that takes in an array of numbers and returns its sum.

// var numbers = [5, 10, 15];

// function sum(numbers) {
//   var sum = 0;
//   numbers.forEach(function(number) {
//     sum += number;
//   });
//   return sum;
// }
// console.log(sum(numbers));

// 2) Write a function that takes in an array of strings and returns the smallest string.

// var strings = ["hi", "hello", "h"];

// function smallest(strings) {
//   var shortest = strings[0];
//   strings.forEach(function(string) {
//     if (string.length < shortest.length) {
//       shortest = string;
//     }
//   });
//   return shortest;
// }
// console.log(smallest(strings));

// 3) Write a function that takes in an array of numbers and returns a new array with the numbers in reverse order.

// function reverse(numbers) {
//   var reverseNumbers = [];
//   for (i = numbers.length - 1; i >= 0; i--) {
//     reverseNumbers.push(numbers[i]);
//   }
//   return reverseNumbers;
// }
// console.log(reverse(numbers));

// 4) Write a function that takes in an array of words and returns the number of words that begin with the letter “a”.

// var strings = ["apple", "ant", "bear"];

// function howManyA(strings) {
//   var count = 0;
//   strings.forEach(function(string) {
//     if (string[0].toLowerCase() === "a") {
//       count++;
//     }
//   });
//   return count;
// }
// console.log(howManyA(strings));

// 5) Write a function that takes in an array of strings and joins them together to make a single string separated by commas.

// var array = ["hello", "world"];

// function combine(strings) {
//   var string = "";
//   strings.forEach(function(word) {
//     string += word;
//   });
//   return string;
// }
// console.log(combine(array));

// 6) Write a function that takes in an array of numbers and returns the product of all the numbers (each number multiplied by each other). 

// var numbers = [3, 2, 3];

// function product(numbers) {
//   var result = 1;
//   numbers.forEach(function(number) {
//     result *= number;
//   });
//   return result;
// }
// console.log(product(numbers));

// 7) Write a function that takes in an array of numbers and returns the two smallest numbers.

// var numbers = [1, 2, 3, 4, 5, 0];

// function twoSmallest(numbers) {
//   var s1 = numbers[0];
//   var s2 = numbers[1];
//   for (var i = 2; i < numbers.length; i++) {
//     if (numbers[i] < s1) {
//       s2 = s1;
//       s1 = numbers[i];
//     } else if (numbers[i] < s2) {
//       s2 = numbers[i];
//     }
//   }
//   console.log(s1, s2);
// }
// twoSmallest(numbers);

// 8) Write a function that takes in an array of numbers and returns a count of how many zeros are in the array.

// var numbers = [1, 2, 3, 0, 0];

// function howMany0(numbers) {
//   var count = 0;
//   numbers.forEach(function(number) {
//     if (number === 0) {
//       count++;
//     }
//   });
//   return count;
// }
// console.log(howMany0(numbers));

// 9) Write a function that takes in an array of numbers and returns true if all the numbers are bigger than 10, otherwise returns false.

// var numbers = [11, 12, 13, 5];

// function largerThan10(numbers) {
//   var largeNumbers = [];
//   numbers.forEach(function(number) {
//     if (number <= 10) {
//       largeNumbers.push(number);
//     }
//   });

//   if (largeNumbers.length === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(largerThan10(numbers));

// 10) Write a function that takes in an array of words and returns the number of times the letter “a” appeared in total.

// var words = ["hello", "world", "apple", "a"];

// function howManyA(words) {
//   var count = 0;
//   words.forEach(function(word) {
//     for (var i = 0; i < word.length; i++) {
//       if (word[i].toLowerCase() === "a") {
//         count++;
//       }
//     }
//   });
//   return count;
// }
// console.log(howManyA(words));

// BONUS
// 1. Write a function that accepts a string and returns whether it’s a palindrome. 

// var word = "aba";

// function palindrome(word) {
//   // var array = [];
//   // for (var i = 0; i < word.length; i++) {
//   //   array.push(word.charAt(i));
//   // }
//   var reveredWord = word.split("").reverse().join("");
//   if (reveredWord === word) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(palindrome(word));

// console.log(word.charAt(1));

// var s = "overpopulation";
// for (var i = 0; i < s.length; i++) {
//   console.log(s.charAt(i));
// }

// 2. Write a function to generate/print/store the first “n” prime numbers.
// A prime number has exactly two factors — 1 and the number itself. For example, the number 5 is prime because its only two factors are 1 and 5.



// 3. Given a tic-tac-toe board (matrix of 3 x 3), write a function that can check to see whether X or O won.

// 4. Use the Ruby .map/.select/.reduce shortcuts to rewrite some of the Ruby problems!

// 5. Use the JavaScript .map/.filter/.reduce shortcuts to rewrite some of the JavaScript problems!