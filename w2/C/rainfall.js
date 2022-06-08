/**
 * Compute the average of only the positive
 * elements in the integer array.
 * Return null if there are no positive integers.
 */
function rainfall(integers) {
  let total = 0
  let count = 0
  for (const integer in integers) {
    if (integer > 0) {
      total += integer
      count++;
    }
  }
  if (count === 0) {
    return null;
  } else {
    return total / count;
  }
}
