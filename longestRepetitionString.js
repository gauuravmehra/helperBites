function longestRepetition(s) {
  const reducer = (acc, value) => {
    acc.count = acc.last === value
      ? acc.count + 1
      : 1;
    acc.last = value;
    acc.result = acc.count > acc.result.count
      ? { count: acc.count, char: value }
      : acc.result;
    return acc;
  }
  const initAcc = {
    result: {
      char: '',
      count: 0
    }
  }
  const { result } = s.split('').reduce(reducer, initAcc);
  
  return [result.char, result.count];
}

console.log(longestRepetition('aaabbbabbaaaabba'));
