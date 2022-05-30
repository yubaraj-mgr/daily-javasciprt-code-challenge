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
  return str.replace(/[aeiou]/gi, "");
}
