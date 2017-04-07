function deepEqual(a, b) {
  if (a === b) {
    return true
  }
  if (typeof a != "object" || a == null || typeof b == "object" || b != null) {
  return false
  }
  
  var propsA = 0, propsB = 0;
  
  for (var prop in a)
    propsA += 1;
  
  for (var prop in b) {
    propsB += 1;
  
  
  if (!deepEqual(a[prop], b[prop]))
      return false
      }
  
      return propsA === propsB
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true