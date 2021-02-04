// Sample test function for Jest testing
function squareRoot(number) {
  'use strict';
  if (number < 0) {
      throw new RangeError("You can't find the square root of negative numbers")
  }
  return Math.sqrt(number);
};
test('square root of 4 is 2', () => {
expect(squareRoot(4)).toBe(2);
});

// Function to test factorsOf
'use strict';
function factorsOf(n) {
const factors = [];
    for (let i=1; i <= n ; i++) {
        if (n/i === Math.floor(n/i)){
        factors.push(i);
        }
}
    return factors;
}
// Function factorsOf() takes a number as a parameter and return all the factors
test('factors of 12', () => {
  expect(factorsOf(12)).toEqual([1,2,3,4,6,12]);
});
// This test syas that the factorsOf() function should 
// be an array containing the factors of 12
// This test will fail completley because there is no factorsOf()