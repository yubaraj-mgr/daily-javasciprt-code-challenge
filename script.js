/*
1. If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.
*/

// Answer
function solution(number) {
  if (number < 0) {
    return 0;
  }
  let byBoth = [];
  let byThree = [];
  let byFive = [];
  for (let i = 0; i < number; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      byBoth.push(i);
    } else if (i % 3 == 0) {
      byThree.push(i);
    } else if (i % 5 == 0) {
      byFive.push(i);
    }
  }
  const addAll = [...byBoth, ...byThree, ...byFive];
  const finalSum = addAll.reduce((a, b) => a + b, 0);
  return finalSum;
}

/*
  2. Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
  */

// Answer
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, ""); // g means global which checks whole string
  //   not just the first char of string and i means case sensitive
}

/*
  3. Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"
  */

//Answer
function spinWords(string) {
  //TODO Have fun :)
  const toArray = string.split(" ");
  let finalArray = [];
  toArray.forEach((item) => {
    if (item.length < 5) {
      finalArray.push(item);
    } else {
      finalArray.push(item.split("").reverse().join("")); //reverse only works on array not on string
    }
  });
  return finalArray.join(" ");
}

/*
  4. Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
   */

//Answer
function digital_root(n) {
  // ...
  const array = Array.from(String(n), Number); //String(n) means convert n to string because number cannot
  //directyly convert into array so we have to convert it into String first
  // , Number means it will change the individual array into Numbers instead of String.
  const sum = array.reduce((a, b) => a + b);
  if (sum >= 10) {
    return digital_root(sum);
  } else {
    return sum;
  }
}

/*
6. Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3] 
*/

//Answer
function arrayDiff(a, b) {
  let c = a.filter((item) => {
    return !b.includes(item);
  });
  return c;
}

/* 
7. n this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
*/

function highAndLow(numbers) {
  // ...
  const array = numbers.split(" ");
  const numberArray = array.map((item) => parseInt(item));
  const max = Math.max(...numberArray);
  const min = Math.min(...numberArray);
  return `${max} ${min}`;
}

/*
8.
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this" 
*/

//Answer
function likes(names) {
  switch (names.length) {
    case 0:
      return "no one likes this";
    case 1:
      return names[0] + " likes this";
    case 2:
      return names[0] + " and " + names[1] + " like this";
    case 3:
      return names[0] + ", " + names[1] + " and " + names[2] + " like this";
    default:
      return (
        names[0] +
        ", " +
        names[1] +
        " and " +
        (names.length - 2) +
        " others like this"
      );
  }
}
