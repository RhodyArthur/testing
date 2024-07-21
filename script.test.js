

const {
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
} = require('./stringTransformations'); // Adjust the path as needed

describe('String Transformations', () => {
  test('capitalizes the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('')).toBe('Empty Strings not allowed');
  });

  test('reverses a string', () => {
    expect(reverse('hello')).toBe('olleh');
    expect(reverse('')).toBe('Empty Strings not allowed');
  });

  test('checks if a string is a palindrome', () => {
    expect(isPalindrome('madam')).toBe('madam is a palindrome');
    expect(isPalindrome('hello')).toBe('olleh is not a palindrome');
    expect(isPalindrome('')).toBe('Empty Strings not allowed');
  });

  test('counts the number of words in a string', () => {
    expect(wordCount('hello')).toBe(5);
    expect(wordCount('')).toBe('Empty Strings not allowed');
  });
});

describe('Array Transformations', () => {
  test('doubles every number in an array', () => {
    expect(double([1, 2, 3])).toEqual([2, 4, 6]);
  });

  test('filters out even numbers from an array', () => {
    expect(filterEven([1, 2, 3, 4])).toEqual([2, 4]);
  });

  test('calculates the sum of all numbers in an array', () => {
    expect(sum([1, 2, 3, 4])).toBe(10);
  });

  test('calculates the average', () => {
    expect(average([1, 2, 3, 4])).toBe(2.5);
  });
});

describe('Object Transformations', () => {
  test('returns the full name of a person object', () => {
    expect(fullName({ firstName: 'John', lastName: 'Doe' })).toBe('John, Doe');
  });

  test('checks if a person is 18 years or older', () => {
    expect(isAdult({ age: 18 })).toBe(true);
    expect(isAdult({ age: 17 })).toBe(false);
  });

  test('filters an array of person objects to keep only those at least minAge years old', () => {
    const people = [
      { name: 'John', age: 18 },
      { name: 'Jane', age: 17 },
    ];
    expect(filterByAge(people, 18)).toEqual([{ name: 'John', age: 18 }]);
  });
});

describe('Compose Functions', () => {
  test('doubles even numbers and adds them', () => {
    expect(doubleEvenNumbersandSum([1, 2, 3, 4])).toBe(12);
  });
});
