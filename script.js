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

/*
8.
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/

// Answer
function descendingOrder(n) {
  //...
  const toString = String(n);
  const toArray = Array.from(toString, Number);
  const sortArray = toArray.sort((a, b) => a - b);
  const reverseArray = sortArray.reverse();
  return parseInt(reverseArray.join(""));
}

/* 9
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

// Answer
var countBits = function (n) {
  // Program Me
  const num = n.toString(2); //2 is special binary argument
  const toArray = num.split("");
  let sum = 0;
  toArray.map((item) => {
    if (item == "1") {
      sum += 1;
    }
  });
  return sum;
};

/*c 10
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters.
Accepted
1,615,925
Submissions
4,078,414
*/
var longestCommonPrefix = function (strs) {
  if (strs.length === 1) {
    return strs[0];
  }

  strs.sort();

  let prefix = "",
    end = strs.length - 1,
    i = 0;

  while (
    i < strs[0].length &&
    i < strs[end].length &&
    strs[0][i] === strs[end][i]
  ) {
    prefix += strs[0][i];
    i++;
  }

  return prefix;
};

/*11
Input: accounts = [[1,2,3],[3,2,1]]
Output: 6
Explanation:
1st customer has wealth = 1 + 2 + 3 = 6
2nd customer has wealth = 3 + 2 + 1 = 6
Both customers are considered the richest with a wealth of 6 each, so return 6.
Example 2:

Input: accounts = [[1,5],[7,3],[3,5]]
Output: 10
Explanation: 
1st customer has wealth = 6
2nd customer has wealth = 10 
3rd customer has wealth = 8
The 2nd customer is the richest with a wealth of 10.
Example 3:

Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
Output: 17
 

Constraints:

m == accounts.length
n == accounts[i].length
1 <= m, n <= 50
1 <= accounts[i][j] <= 100
Accepted
304,723
Submissions
341,942

*/

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  const maxValue = [];
  accounts.map((eachAccounts, index) => {
    maxValue.push(eachAccounts.reduce((acc, current) => acc + current));
  });
  return Math.max(...maxValue);
};

/*
12. Given an integer num, return the number of steps to reduce it to zero.

In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

Example 1:

Input: num = 14
Output: 6
Explanation: 
Step 1) 14 is even; divide by 2 and obtain 7. 
Step 2) 7 is odd; subtract 1 and obtain 6.
Step 3) 6 is even; divide by 2 and obtain 3. 
Step 4) 3 is odd; subtract 1 and obtain 2. 
Step 5) 2 is even; divide by 2 and obtain 1. 
Step 6) 1 is odd; subtract 1 and obtain 0.
Example 2:

Input: num = 8
Output: 4
Explanation: 
Step 1) 8 is even; divide by 2 and obtain 4. 
Step 2) 4 is even; divide by 2 and obtain 2. 
Step 3) 2 is even; divide by 2 and obtain 1. 
Step 4) 1 is odd; subtract 1 and obtain 0.
Example 3:

Input: num = 123
Output: 12
 

Constraints:

0 <= num <= 106
*/

/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let i = num;
  let answer = 0;
  while (i > 0) {
    if (i % 2 == 0) {
      i = i / 2;
      answer += 1;
    } else if (i % 2 == 1) {
      i = i - 1;
      answer += 1;
    }
  }
  return answer;
};

/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

*/
