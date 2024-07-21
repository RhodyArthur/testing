// String Transformations
// a. Capitalizes the first letter of a string
function capitalize(str) {
  if (str.length === 0) {
    return 'Empty Strings not allowed';
  }
  let capitalizedWord = '';
  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      capitalizedWord += str[0].toUpperCase();
    } else {
      capitalizedWord += str[i];
    }
  }
  return capitalizedWord;
}

// b. reverses a string
function reverse(str) {
  if (str.length === 0) {
    return 'Empty Strings not allowed';
  }
  let reversedString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
}

// c. Palindrome: checks if a string is a palindrome
function isPalindrome(str) {
  if (str.length === 0) {
    return 'Empty Strings not allowed';
  }
  let word = '';
  for (let i = str.length - 1; i >= 0; i--) {
    word += str[i];
  }

  if (word === str) {
    return `${word} is a palindrome`;
  } else {
    return `${word} is not a palindrome`;
  }
}

// d. counts the number of words in a string
function wordCount(str) {
  let count = 0;
  if (str.length === 0) {
    return 'Empty Strings not allowed';
  }
  for (let i of str) {
    count += 1;
  }
  return count;
}

// 2. Array Transformations
// a. doubles every number in an array
function double(arr) {
  return arr.map((i) => i * 2);
}

// b. filters out even numbers from an Array
function filterEven(arr) {
  return arr.filter((i) => i % 2 === 0);
}

// c. calculates the sum of all numbers in an array
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

// d. calculates the average
function average(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total / arr.length;
}

// Object Transformations
// Returns the full name of a person object (given properties firstName and lastName).

function fullName(person) {
  const { firstName, lastName } = person;
  return `${firstName}, ${lastName}`;
}

// checks if a person is 18 years or older
function isAdult(person) {
  const { age } = person;
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

// Filters an array of person objects to keep only those at least minAge years old.
function filterByAge(people, minAge) {
  return people.filter((person) => {
    const { age, name } = person;
    return age >= minAge;
  });
}

// combine functions to double even numbers and add
function compose(...fns) {
  return function (initialValue) {
    return fns.reduceRight((accumulator, fn) => fn(accumulator), initialValue);
  };
}

const doubleEvenNumbersandSum = compose(sum, double, filterEven);

module.exports = {
  capitalize,
  reverse,
  isPalindrome,
  wordCount,
  double,
  filterEven,
  sum,
  average,
  fullName,
  isAdult,
  filterByAge,
  compose,
  doubleEvenNumbersandSum,
};
