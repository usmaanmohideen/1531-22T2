let x=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result=[];
for (let i = 0; i < x.length; i++) {
    if (x[i] % 2 === 0) {
        result.push(x[i] * 2);
    } else {
        result.push(x[i]);
    }
}
console.log(result);

/*

NOTE: const just means the variable cannot be reassigned, not that you can’t manipulate it

What does it do?


How can the style be improved here?


How can we modify the code to be less like C and more Javascripty?


Share some of your findings with the class and assist your tutor in developing a new solution.
How different is this from the original code?

*/