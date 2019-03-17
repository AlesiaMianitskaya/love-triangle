/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(arr) {
  let count = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      continue;
    }

    let first = arr[i];
    let second = arr[first - 1];
    let third = arr[second - 1];

    if (
      third === i + 1 &&
      first != arr[first - 1] &&
      second != arr[second - 1] &&
      third != arr[third - 1]
    ) {
      count++;
      arr[first - 1] = 0;
      arr[second - 1] = 0;
      arr[third - 1] = 0;
    }
  }
  return count;
};
