const integers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = [];
for (const integer of integers) {
  result.push(integer % 2 === 0 ? integer * 2 : integer);
}
console.log(result);

/*
        OUTSIDE OF COURSE MATERIAL BUT WELL WITHIN YOUR REACH AND APPEARS IN MATERIAL

Ternary operators: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator,
list comprehension: https://cgi.cse.unsw.edu.au/~cs2041/doc/MDN_javascript_reference/Web/JavaScript/Reference/Operators/Array_comprehensions.html
*/