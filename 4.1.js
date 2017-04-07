function range(start, end, step) {
  if (step == null) step = 1;
  var arr = [];

  if (step > 0) {
    for (var i = start; i <= end; i += step)
      arr.push(i);
  } else {
    for (var i = start; i >= end; i += step)
      arr.push(i);
  }
  return arr;
}

function sum(arr) {
  var result = 0;
  for (var i = 0; i < arr.length; i++)
    result += arr[i];
  return result;
}

console.log(range(1, 10))
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55