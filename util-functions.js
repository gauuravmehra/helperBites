// input - [1,2,[1,2],[[1,2]],1,2]
// output should be - [1,2,2,4,3,6,1,2]

var testArr = [1,2,[1,2],[[1,2]],1,2];

var deepFlat = function(array) {
  var result = [];
  
  array.forEach(function (elem, i) {
    if (Array.isArray(elem)) {
        var arr = deepFlat(elem);
        arr = arr.map(a => i ? (a * i) : a);
        result = result.concat(arr);
    } else {
        result.push(elem);
    }
  });
  
  return result;
};

deepFlat(testArr); // [1,2,2,4,3,6,1,2]
