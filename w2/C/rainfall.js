/**
 * Compute the average of only the positive
 * elements in the integer array.
 * Return null if there are no positive integers.
 */
function rainfall(integers) {
    let total = 0;
    let posCount = 0;
    for (const element of integers) {
      if (element > 0) {
        total += element; // total = total + element;
        posCount++; // posCount = posCount + 1;
      }
    }

    return total > 0 ? total/posCount : null;
}

console.log(rainfall([1,2,3,4,5,6,7,-6,-5,-3,-2]));

// condition ? return if true : return if false

// total > 0 ? total/posCount : null