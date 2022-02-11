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

// --------------------------------
// Rotate Right

function RightRotate(a, n, k) {
    k = k % n;
    const result = [];
    for (let i = 0; i < n; i++) {
        if (i < k) {
            result.push(a[n + i - k] + " ");
        }
        else {
            result.push((a[i - k]) + " ");
        }
    }
    return result;
}
 
// Driver code
let Array = [1, 2, 3, 4, 5];
let N = Array.length;
let K = 2;
 
RightRotate(Array, N, K); // [5, 4, 1, 2, 3]

// --------------------------------
// Longest Repetition

function longestRepetition(s) {
  var reducer = (acc, value) => {
    console.log('111111', acc, value);
    acc.count = acc.last === value
      ? acc.count + 1
      : 1;
    acc.last = value;
    acc.result = acc.count > acc.result.count
      ? { count: acc.count, char: value }
      : acc.result;
    return acc;
  }
  var initAcc = {
    result: {
      char: '',
      count: 0
    }
  }
  var { result } = s.split('').reduce(reducer, initAcc);
  
  return [result.char, result.count];
}

console.log(longestRepetition('aaacccccccsdssssssssssdddd')); // ['s', 10]

// --------------------------------
// Return count of unique chars

function uniqueChars (str) {
    var len = 0;

    var tempStr = str.toLowerCase();

    for (var i = 0; i < tempStr.length; i++) {
        var char = tempStr.charAt(i);
        tempStr = tempStr.replaceAll(char, '');
        len++;
    }
    return len;
    
}

uniqueChars("abcabcbbbbbbbbbbvvvvvvvvv"); // 4

// --------------------------------
// Get Max td's from tables

function getMaxTDs () {
    const tables = document.getElementsByTagName('table');
    const count = Array.from(tables, table => table.getElementsByTagName('td').length);
    
    return count.length > 0 ? Math.max(...count) : 0;
}

// --------------------------------
