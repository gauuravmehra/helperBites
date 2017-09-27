function findCookie (a, b) {
    
    function getSubsets (arr) {
        var res = [];
        for (var i = 0; i < Math.pow(2, arr.length); i++) {
            var bin = (i).toString(2), set = [];
            bin = new Array((arr.length - bin.length) + 1).join('0') + bin;
            
            for (var j = 0; j < bin.length; j++) {
                if (bin[j] === '1') {
                    set.push(arr[j])
                }
            }
            res.push(set)
        }
        return res
    };

    function getLeastFromAll (arr) {
        var arrMin = [];
        for (var i = 0; i < arr.length; i++) {
            arrMin.push(Math.min.apply(null, arr[i]));
        }
        return arrMin;
    }

    function add (a, b) {
        return a + b;
    }

    var subs = getSubsets(b),
        sum = 0,
        sortedArr = [];
    for (var i = 0; i < subs.length; i++) {
        if (subs[i].length === a) {
           sortedArr.push(subs[i]);
        }
    }

    var least = getLeastFromAll(sortedArr);

    sum = least.reduce(add, 0);

    return sum;

}

findCookie(3, [1,2,3,4,5,6])
